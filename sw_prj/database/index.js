const mysql = require("mysql2/promise");

class MySqlDatabase {
  pool;

  constructor() {
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: "localhost",
      port: 3306,
      user: "root",
      password: "1234",
      database: "shop",
    });
  }

  async query(sql, value) {
    const [rows, fields] = await this.pool.query(sql, [value]);
    return rows;
  }
}

module.exports = new MySqlDatabase();
