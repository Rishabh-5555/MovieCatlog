const db = require("mysql2");

const pool = db.createPool({
  host: "localhost",
  user: "root",
  database: "moviedb",
  password: "chopde@2085",
});

module.exports = pool.promise();
