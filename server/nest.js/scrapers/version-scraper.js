const scrapeIt = require('scrape-it');

scrapeIt('https://minecraft.fandom.com/wiki/Java_Edition_version_history#Full_release', {
  versions: {
    listItem: '.mw-headline',
    convert: (x) => (!isNaN(parseFloat(x)) ? x : undefined),
  },
}).then(({ data, response }) => {
  if (response.statusCode !== 200) throw new Error('version-scraper: failed to fetch versions');
  if (!data || !Array.isArray(data.versions))
    throw new Error('version-scraper: Failed to fetch versions data');
  if (data.versions.length === 0) throw new Error('version-scraper: No versions found');

  const { versions } = data;
  
  console.log(versions.filter((elem) => elem));
});
