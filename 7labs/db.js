const Pool = require('pg').Pool;
const pool = new Pool({
user: "postgres",
password: "96365",
host: "localhost",
port: 5432,
database: "students"
});

module.exports = pool;