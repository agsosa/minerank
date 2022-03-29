import scrapeIt from 'scrape-it';
import fs from 'fs';
import countryLookup from 'country-code-lookup';
import { Logger } from '@nestjs/common';
import { PremiumTypeEnum } from 'src/@shared/types/enum/community.enum';

const CACHE_FILE = 'scraped-servers.json';
const TOP_40_URL = 'https://www.40servidoresmc.es/';
const OTROS_SERVIDORES_URL = 'https://www.40servidoresmc.es/otrosservidores.php';

const logger = new Logger('ServersScraper');

const getSocialMediaNameFromUrl = (url: string) => {
  if (!url || typeof url !== 'string') return 'website';

  if (url.includes('twitter')) return 'twitter';
  if (url.includes('facebook')) return 'facebook';
  if (['discord', 'invite.gg'].includes(url)) return 'discord';
  if (['youtube', 'yt'].includes(url)) return 'youtube';
  if (['telegram', 't.me'].includes(url)) return 'telegram';
  if (url.includes('instagram')) return 'instagram';
  if (['ts', 'teamspeak', 'ts3', 'ts3server', 'tsserver'].includes(url)) return 'teamspeak';

  return 'website';
};

interface ISocialMediaLink {
  url: string;
  type: string;
}

interface IScrapedServer {
  name: string;
  shortName: string;
  ip: string;
  port: number;
  versions: string[];
  players: string;
  countryCode: string;
  gamemodes: string[];
  socialLinks: ISocialMediaLink[];
}

interface IScrapeListData {
  servers: {
    normales: IScrapedServer[];
  };
}

/**
 * Scrape a list of servers from a specific URL
 * @param url The URL to scrape
 * @returns IScrapedServer[]
 */
const scrapeList = async (url: string) => {
  const {
    data,
    response: { statusCode },
  } = await scrapeIt<IScrapeListData>(url, {
    servers: {
      selector: '.collapsible',
      data: {
        normales: {
          listItem: 'li',
          data: {
            name: {
              selector: '.lefty > .enlace',
              convert: (elem) => elem?.trim().replace('Votar', ''),
            },
            shortName: {
              selector: '.lefty > .enlace',
              attr: 'href',
              convert: (elem) => elem?.trim().replace('/', ''),
            },
            ip: {
              selector: '.celda-ip > input',
              attr: 'value',
              convert: (elem) => elem?.split(':')[0],
            },
            port: {
              selector: '.celda-ip > input',
              attr: 'value',
              convert: (elem) => elem?.split(':')[1] || 25565,
            },
            versions: {
              selector: '.celda-version',
              convert: (elem) => elem?.replace("Versión", "").split('-'),
            },
            players: '.celda-jugadores',
            countryCode: {
              selector: '.celda-nombre > div > img',
              attr: 'title',
              convert: (elem) => {
                const trim = elem?.trim().replace('Servidor de: ', '');
                return countryLookup.byCountry(trim)?.iso2 || 'ES';
              },
            },
            gamemodes: {
              selector: '.submodos',
              convert: (elem) => elem?.trim().replace('Modos: ', '').toLowerCase().split(' '),
            },
            socialLinks: {
              listItem: '.enlaces-mas > a',
              data: {
                url: {
                  attr: 'href',
                },
                type: {
                  attr: 'href',
                  convert: getSocialMediaNameFromUrl,
                },
              },
            },
          },
        },
      },
    },
  });

  if (statusCode !== 200) throw new Error('Failed to fetch servers list with url ' + url);

  if (!data || !Array.isArray(data?.servers?.normales))
    throw new Error('Failed to fetch servers data with url ' + url);

  if (data?.servers?.normales?.length === 0) throw new Error('No servers found with url ' + url);

  const result: any[] = [];

  for (const server of data.servers.normales) {
    if (!server || !server.name) continue;
    result.push(server);
  }

  return result;
};

interface IScrapeDetailsData {
  description: string;
  imageUrl: string;
  premiumType: PremiumTypeEnum;
}

/**
 * Scrape server details from a server short name
 * @param shortName Server short name
 * @returns IScrapeDetailsData object
 */
const scrapeServerDetails = async (shortName: string) => {
  const {
    data,
    response: { statusCode },
  } = await scrapeIt<IScrapeDetailsData>(`${TOP_40_URL}${shortName}`, {
    description: {
      selector: '.desc',
    },
    imageUrl: {
      selector: '.slogo',
      attr: 'src',
    },
    premiumType: {
      selector: '.info-r',
      // closest: 'span',
      convert: (elem) => {
        switch (elem?.trim().toLowerCase()) {
          case 'semipremium':
          case 'semi premium':
          case 'semi-premium':
            return PremiumTypeEnum.SEMI_PREMIUM;
          case 'premium':
            return PremiumTypeEnum.PREMIUM;
          case 'no premium':
          case 'no-premium':
          case 'nopremium':
            return PremiumTypeEnum.NO_PREMIUM;
          default:
            return elem;
        }
      },
    },
  });

  if (statusCode !== 200)
    throw new Error('Failed to fetch server details with shortName ' + shortName);

  if (!data) throw new Error('No server details found for shortName ' + shortName);

  return data;
};

type FinalScrapedServer = IScrapedServer &
  IScrapeDetailsData & {
    isFromTop40?: boolean;
  };

/**
 * Try to get servers from the cache json file or scrape them from a website
 * @returns Servers array
 */
async function getServersFromJsonOrScrape(): Promise<FinalScrapedServer[]> {
  // Try read file
  try {
    const data = fs.readFileSync(CACHE_FILE, 'utf8');
    logger.debug('Read servers from cache file');
    return JSON.parse(data);
  } catch (e) {
    logger.debug('Failed to read cache file, scraping servers');
  }

  const promises: Promise<any>[] = [];

  logger.debug('Scraping top 40 servers');
  const top40 = await scrapeList(TOP_40_URL);
  top40.forEach((server) => {
    server.isFromTop40 = true;
  });

  logger.debug('Scraping other servers');
  const otros = await scrapeList(OTROS_SERVIDORES_URL);

  const concat = [...top40, ...otros];

  logger.debug('Total server scraped: ', top40.length + otros.length);
  logger.debug('Scraping server details...');

  for (const server of [...top40, ...otros]) {
    promises.push(
      scrapeServerDetails(server.shortName).then((details) => {
        server.description = details.description;
        server.imageUrl = details.imageUrl;
        server.premiumType = details.premiumType;
      }),
    );
  }

  await Promise.all(promises);

  logger.debug('Everything done!');
  logger.debug('Writing to file server-list.json...');

  // write to file
  fs.writeFileSync(CACHE_FILE, JSON.stringify([...top40, ...otros], null, 2));

  return concat;
}

export const scrapeServers = async () => {
  try {
    return await getServersFromJsonOrScrape();
  } catch (err) {
    console.error(err);
    return [];
  }
};
