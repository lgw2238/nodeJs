var mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost', 
  port: 3307,
  user: 'root', 
  password: '1234',
  connectionLimit: 5
});

async function getUserList() {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    conn.query('USE nodejs'); // 사용할 DB 명시
    rows = await conn.query('SELECT * FROM user'); // 쿼리 실행
  }
  catch (err) { throw err; }
  finally {
    if (conn) conn.end();
    return rows;
  }
}

module.exports = { getUserList, }