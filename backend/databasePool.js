const { Pool } = require('pg');
const databseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databseConfiguration);

module.exports = pool;

// pool.query('SELECT foo FROM generation', (error, response) => {
//   if (error) return console.log('err', error)

//   console.log('response.row', response.rows)
// })
