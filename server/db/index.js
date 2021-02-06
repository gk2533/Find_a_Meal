const Pool = require("pg").Pool;

const config = {
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "hackBU_db"
};

const pool = new Pool(config);

module.exports = pool;