const scrapeIt = require('scrape-it');

scrapeIt('https://www.40servidoresmc.es/', {
  title: 'h2',
  gamemodes: {
    listItem: '#select_id[name=modo] > option',
    name: 'modo',
    convert: (elem) => (!elem.includes('(todos)') ? elem : undefined),
  },
}).then(({ data, response }) => {
  console.log(response.statusCode);
  console.log(data);
});
