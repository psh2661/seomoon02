const multer  = require('multer')
const fs = require("fs");
const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('./../db.js');

const html = `<!doctype html>
  <html>
  <head>
  <title>node HTML</title>
  </head>
  <body>
  <h1>hello</h1>
  <form action='/name' method ='POST'>
  <input type='text' name='name' placeholder='이름'>
  <button> 확인 </button>
  </form>
  </body>
  </html>`;
  //메인페이지 연결
  router.get('/',(req, res) => {
    res.render('main'); 
  })
  
  //공지사항 연결
  //게시판 작성 연결
router.get('/newmemo', (req, res) => {
  res.render('newmemo');
});
//게시판 작성 값 연결
router.post('/writeMemo',(req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let newMemo_view = param['newMemo_view'];
  let newMemo_name = param['newMemo_name'];
  let newMemo_title = param['newMemo_title'];
  let newMemo_cont = param['newMemo_cont'];
  db.insertMemo(newMemo_view,newMemo_name,newMemo_title,newMemo_cont,()=>{
    res.redirect('/memolist');
  })
});

//게시판 리스트 연결
router.get('/memolist', (req, res) => {
  db.getMemo((rows)=>{
    res.render('memolist',{rows:rows}); 
  })
});


//게시판 수정페이지 연결
router.get('/upmemo', (req, res) => {
  res.render('upmemo');
});
//게시판 수정 연결
router.post('/upMemo', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let upMemo_num = param['upMemo_num']
  let upMemo_view = param['upMemo_view'];
  let upMemo_name = param['upMemo_name'];
  let upMemo_title = param['upMemo_title'];
  let upMemo_cont = param['upMemo_cont'];
  db.updateMemo(upMemo_num,upMemo_view,upMemo_name,upMemo_title,upMemo_cont,()=>{
    res.redirect('/memolist');
  })
});


//뷰어에 수정버튼 추가 후 연결
router.get('/updateM',(req, res) => {
  let num = req.query.num;
  db.getMemoByid(num,(row)=>{
    res.render('upmemo',{row:row[0]})
  })
});

//뷰어에 삭제버튼 추가 후 연결
router.get('/deleteM',(req, res) => {
  let num = req.query.num;
  db.deleteByid(num,()=>{
    res.redirect('/memolist')
  })
});
  
  //로그인 연결
  router.get('/login',(req, res) => {
    res.render('login'); 
  });
  router.post('/login',(req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let password = param['password'];
    console.log(id);
    console.log(password);
    
  });
  router.get('/login',(req, res) => {
    db.getMemo((rows)=>{
      res.render('login',{rows:rows});
    })
  
  });
  router.post('/login',(req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let password = param['password'];
    console.log(id);
    console.log(password);
    
  });

  //회원가입 연결 - 이용약관
  router.get('/join01',(req, res) => {
    res.render('join01'); 
  });
  router.post('/join01',(req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let agree01 = param['agree01'];
    let agree02 = param['agree02'];
    let agree03 = param['agree03'];
    let agree_all = param['agree_all'];
    console.log(agree01);
    console.log(agree02);
    console.log(agree03);
    console.log(agree_all);
  });
  //회원가입 연결 - 정보입력
  router.get('/join02',(req, res) => {
    res.render('join02'); 
  });
  router.post('/join02',(req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let user_ID = param['user_ID'];
    let user_PW1 = param['user_PW1'];
    let user_PW2 = param['user_PW2'];
    let user_name = param['user_name'];
    let user_email = param['user_email'];
    let user_phone = param['user_phone'];
    console.log(user_ID);
    console.log(user_PW1);
    console.log(user_PW2);
    console.log(user_name);
    console.log(user_email);
    console.log(user_phone);
  });
  
  const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "../public/uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); //파일의 확장자
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명 + 날짜 _ 확장자명
        },
    }),
    limits: { fileSize: 1920 * 1024 * 5 }, //1024*1024*2 => 2메가 까지 업로드 가능
  });
  module.exports = router;