const scrapeIt = require('scrape-it');
const fs = require('fs');

/*
  NO_PREMIUM = "NO-PREMIUM",
  SEMI_PREMIUM = "SEMI-PREMIUM",
  PREMIUM = "PREMIUM",
*/

const TOP_40_URL = 'https://www.40servidoresmc.es/';
const OTROS_SERVIDORES_URL = 'https://www.40servidoresmc.es/otrosservidores.php';

const scrapeServers = async (url) => {
  const { data, response } = await scrapeIt(url, {
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
            },
            version: '.celda-version',
            players: '.celda-jugadores',
            country: {
              selector: '.celda-nombre > div > img',
              attr: 'title',
              convert: (elem) => elem?.trim().replace('Servidor de: ', ''),
            },
            gamemodes: {
              selector: '.submodos',
              convert: (elem) =>
                elem?.trim().replace('Modos: ', '').replaceAll(' ', ', ').toLowerCase(),
            },
            socialLinks: {
              listItem: '.enlaces-mas > a',
              data: {
                url: {
                  attr: 'href',
                },
                type: {
                  attr: 'href',
                  convert: (elem) => {
                    if (elem.includes('twitter')) return 'twitter';
                    if (elem.includes('facebook')) return 'facebook';
                    if (['discord', 'invite.gg'].includes(elem)) return 'discord';
                    if (['youtube', 'yt'].includes(elem)) return 'youtube';
                    if (['telegram', 't.me'].includes(elem)) return 'telegram';
                    if (elem.includes('instagram')) return 'instagram';
                    if (['ts', 'teamspeak', 'ts3', 'ts3server', 'tsserver'].includes(elem))
                      return 'teamspeak';
                    return 'website';
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  let result = [];

  for (let server of data.servers.normales) {
    if (!server || !server.name) continue;
    result.push(server);
  }

  return result;
};

const scrapeServerDetails = async (shortName) => {
  const { data, response } = await scrapeIt(`${TOP_40_URL}${shortName}`, {
    description: {
      selector: '.desc',
    },
    imageUrl: {
      selector: '.slogo',
      attr: 'src',
    },
    premiumType: {
      selector: '.info-r',
      near: 'span',
      convert: (elem) => {
        switch (elem?.trim().toLowerCase()) {
          case 'semipremium':
          case 'semi premium':
          case 'semi-premium':
            return 'SEMI-PREMIUM';
          case 'premium':
            return 'PREMIUM';
          case 'no premium':
          case 'no-premium':
          case 'nopremium':
            return 'NO-PREMIUM';
          default:
            return elem;
        }
      },
    },
  });

  return data;
};

(async function main() {
  const promises = [];

  console.log('Scraping top 40 servers');

  const top40 = await scrapeServers(TOP_40_URL);
  top40.forEach((server) => {
    server.isFromTop40 = true;
  });

  console.log('Scraping other servers');

  const otros = await scrapeServers(OTROS_SERVIDORES_URL);

  console.log('Total server scraped: ', top40.length + otros.length);

  console.log('Scraping server details');

  for (let server of [...top40, ...otros]) {
    promises.push(
      scrapeServerDetails(server.shortName).then((details) => {
        if (!details) throw new Error('No details for', server.shortName);
        server.description = details.description;
        server.imageUrl = details.imageUrl;
        server.premiumType = details.premiumType;
      }),
    );
  }

  await Promise.all(promises);

  console.log('Everything done!');

  console.log([...top40, ...otros]);

  console.log('Writing to file server-list.json...');

  // write to file
  fs.writeFileSync('./server-list.json', JSON.stringify([...top40, ...otros], null, 2));
})();
