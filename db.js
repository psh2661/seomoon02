var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-1.c4ovvgfbmftw.ap-northeast-2.rds.amazonaws.com',
  user     : 'root',
  password : 'fc346754',
  database : 'seomoon02'
});
//w3school에서 복사한 부분
connection.connect(function(err){
  if (err) throw err;
  console.log("connected!")
})
 
//db memorable 추출
function getMemo(callback){
  connection.query('SELECT * FROM memotable ORDER BY desc,',(rows,fields)=>{
    if (err) throw err;
    callback(rows);
  })
}
 
//1202수정 여러개의 모듈을 내보내는 방법 : {}로 묶고 ,를 찍어서 사용한다
module.exports = {
  seomoon_02
}