
// 공통 객체 생성 규칙
// 1. MongoClient, url, dbName 을 json으로 받고 params를 json으로 받는다
const {MongoClient} = require("mongodb");
const url = "";
const dbName = "";

// 2. params 규격 설정
//   - call 함수명, param, callback 함수

function common_work(params){

    const client= new MongoClient("192.168.1.118", {useNewUrlParser:true, useUnifiedTopology:true});            
    this.prototype.getConnect = function(){
        client.connect().then(result =>
            {            
                console.log(client.isConnected());
                const db =client.db(params.dbName);
                const collection =db.collection(params.collection);
                // 호출에 따라 이 함수를 바꿔서 자세한 내용 작성                                
                client.close();
            }).catch(err => {
                console.error(err);
            });
    }
}





