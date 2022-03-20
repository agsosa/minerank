import scrapeIt from 'scrape-it';

const URL = 'https://minecraft.fandom.com/wiki/Java_Edition_version_history#Full_release';
const SELECTOR = '.mw-headline';
const CONVERT = (x) => (!isNaN(parseFloat(x)) ? x : undefined);

interface IData {
  versions: string[];
}

export const scrapeVersions = async () => {
  try {
    const {
      data,
      response: { statusCode },
    } = await scrapeIt<IData>(URL, {
      versions: {
        listItem: SELECTOR,
        convert: CONVERT,
      },
    });

    if (statusCode !== 200) throw new Error('version-scraper: failed to fetch versions');

    if (!data || !Array.isArray(data?.versions))
      throw new Error('version-scraper: Failed to fetch versions data');

    if (data.versions.length === 0) throw new Error('version-scraper: No versions found');

    return data.versions.filter((elem) => elem);
  } catch (err) {
    console.error(err);
    return [];
  }
};
