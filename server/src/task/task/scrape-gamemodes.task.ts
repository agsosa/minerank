import scrapeIt from 'scrape-it';

const URL = 'https://www.40servidoresmc.es/';
const SELECTOR = '#select_id[name=modo] > option';
const CONVERT = (x) => (!x?.includes('(todos)') ? x : undefined);

interface IData {
  gamemodes: string[];
}

export const scrapeGameModes = async () => {
  try {
    const {
      data,
      response: { statusCode },
    } = await scrapeIt<IData>(URL, {
      gamemodes: {
        listItem: SELECTOR,
        convert: CONVERT,
      },
    });

    if (statusCode !== 200) throw new Error('gamemode-scraper: failed to fetch gamemodes');

    if (!data || !Array.isArray(data?.gamemodes))
      throw new Error('gamemode-scraper: Failed to fetch gamemode data');

    if (data.gamemodes.length === 0) throw new Error('gamemode-scraper: No gamemodes found');

    return data.gamemodes.filter((elem) => elem);
  } catch (err) {
    console.error(err);
    return [];
  }
};
