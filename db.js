var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-2.c4ovvgfbmftw.ap-northeast-2.rds.amazonaws.com',
  user     : 'root',
  password : 'fc346754',
  database : 'seomoon_02',
  multipleStatements:true,
  dateStrings: 'date'
});
//w3school에서 복사한 부분
connection.connect(function(err){
  if (err) throw err;
  console.log("connected!")
})
 //메모
function getMemo(callback){
  connection.query('SELECT * FROM memos ORDER BY num desc',(err,rows)=>{
    if (err) throw err;
    callback(rows);
  })
}


//메모 입력
function insertMemo(newMemo_view,newMemo_name,newMemo_title,newMemo_cont,callback){
  connection.query(`INSERT INTO memos(create_time,view,wirte,title,cont) VALUES 
  (NOW(),'${newMemo_view}','${newMemo_name}','${newMemo_title}','${newMemo_cont}')`,(err) => {
    if (err) throw err;
    callback();
  })
}

//프라이머리키 일치하는 테이블만 추출
function getMemoByid(num, callback){
  connection.query(`SELECT * FROM memos WHERE num = ${num}`, (err,row)=>{
    if (err) throw err;
    callback(row);
  })
}

//프라이머리키 일치하는 부분 수정
function updateMemo(upMemo_num,upMemo_view,upMemo_name,upMemo_title,upMemo_cont,callback){
  connection.query(`UPDATE memos SET create_time= now(),view='${upMemo_view}',wirte='${upMemo_name}',title='${upMemo_title}',cont='${upMemo_cont}' WHERE num =${upMemo_num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}

//프라이머리키 일치하는 부분 삭제
function deleteByid(num,callback){
  connection.query(`DELETE FROM memos WHERE num=${num}`,(err)=>{
    if (err) throw err;
    callback();
  })
}

module.exports = {
  getMemo,insertMemo,getMemoByid,updateMemo,deleteByid
}
