var maria = require("mysql");

const conn = maria.createConnection({
    host: 'localhost', // aws ec2 도메인 주소
	port: "3307", // aws ec2에 연결된 security group에서 허용한 port 번호
	user: "root", // mariaDB 접속계정
	password: "1234", // mariaDB 접속계정의 비밀번호
	database: "nodeJs", // 연결시킬 database 이름
});

console.log("conn:", conn);
 if(conn != ""){
     console.log("Maria DB CONNECT ");

 }
 async function getUserList() {
    let conn, rows;
    try {
      conn = await pool.getConnection();
      conn.query('nodejs'); // 사용할 DB 명시
      rows = await conn.query('SELECT * FROM user'); // 쿼리 실행
    }
    catch (err) { throw err; }
    finally {
      if (conn) conn.end();
      return rows;
    }
  }

module.exports = { getUserList, };
