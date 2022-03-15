// MONGODB CONNECTED
const MongoClient = require('mongodb').MongoClient;

// 데이터베이스 객체를 위한 변수 선언
var database;
// MONGODB CONNECTED STEP2
async function connectDB() {
  // 데이터베이스 연결 정보
  var databaseUrl = 'mongodb://localhost:27017/local';
  
  // 데이터베이스 연결
  MongoClient.connect(databaseUrl, {useNewUrlParser : true}, function(err, client) {
      if (err) throw err;
      
      console.log('데이터베이스에 연결되었습니다. : ' + databaseUrl);
      
      // database 변수에 할당
      database = client.db('local');
      console.log(database);
  });
}

module.exports = { connectDB, };
