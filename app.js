const weather = require('./weather');
//Join multiple values passed as arguments and replace all spaces with underscores
const query = process.argv.slice(2).join("_").replace('', '');
//query: 95112
//query: San Jose_CA
//query: Rome_Italy
weather.get(query);