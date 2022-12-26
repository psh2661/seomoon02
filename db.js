var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-2.c4ovvgfbmftw.ap-northeast-2.rds.amazonaws.com',
  user     : 'root',
  password : 'fc346754',
  database : 'seomoon_02',
  multipleStatements:true,
});
//w3school에서 복사한 부분
connection.connect(function(err){
  if (err) throw err;
  console.log("connected!")
})
 
//db memorable 추출
function notice(callback){
  connection.query('SELECT * FROM memotable ORDER BY desc,',(rows,fields)=>{
    if (err) throw err;
    callback(rows);
  })
}
 
//1202수정 여러개의 모듈을 내보내는 방법 : {}로 묶고 ,를 찍어서 사용한다
module.exports = {
  notice
}



//메모를 추출할때
function notice(callback) {
  connection.query("SELECT * FROM memoTable ORDER BY id desc", (err, rows) => {
      if (err) throw err;
      callback(rows);
  });
}
//메모를 입력할때
function insertMemo(title, name, content, callback) {
  connection.query(`insert into memotable (create_time, name,title,content) values (NOW(), '${name}','${title}','${content}')`, (err) => {
      if (err) throw err;
      callback();
  });
}
//메모중 아이디가 일치하는 데이터 추출(내보내는 건 못함)
//아이디는 프라이머리 키로 공통된 숫자 불가능
function getMemoByid(id, callback) {
  //한줄을 다 불러올때는 from + 'table 이름" + 없음
  connection.query(`SELECT * FROM memotable where id=${id}`, (err, row) => {
      if (err) throw err;
      callback(row);
  });
}
//아이디가 일치하는 부분을 update한 내용 내보내기
function updateMemo(id, title, name, content, callback) {
  connection.query(`UPDATE memotable set create_time=now(), name='${name}',title='${title}',content='${content}' where id=${id}`, (err) => {
      if (err) throw err;
      callback();
  });
}

//아이디가 일치하면 삭제하기
function deleteMemo(id, callback) {
  connection.query(`DELETE from memotable WHERE id=${id}`, (err) => {
      if (err) throw err;
      callback();
  });
}