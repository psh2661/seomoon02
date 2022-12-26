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
  // 리스트
  // router.get('/notice_list',(req, res) => {
  //   res.render('notice_list'); 
  // })
  router.get("/memoList", (req, res) => {
    db.getMemo((rows) => {
        res.render("memoList", { rows: rows }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
    // let title = param["title"];
    // let id = param["writer"];
    // let pw = param["password"];
    // let content = param["content"];
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