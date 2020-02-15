// PostgreSQL seed file
const { Pool, Client } = require('pg')
const pgConfig = require('./pgconfig.js');

const pool = new Pool(pgConfig);

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
