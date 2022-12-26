// header 중복방지
let header3 = document.querySelector('#header')
if (window.location.pathname == '/join02') {
  header.style.display = 'none';
}
// footer 중복방지
let footer3 = document.querySelector('#footer')
if (window.location.pathname == '/join02') {
  footer.style.display = 'none';
}

//joinform_check 함수로 유효성 검사
function joinform_check() {
  //변수에 담아주기
  var user_id = document.getElementById("user_id");
  var user_pw = document.getElementById("user_pw");
  var repw = document.getElementById("repw");
  var user_name = document.getElementById("user_name");
  var ph_num = document.getElementById("ph_num");
  var user_email = document.getElementById("user_email");
// 아이디==========================
  //아이디 정규식
  var idCheck = /^[a-z]+[a-z0-9]{6,12}$/;
  if (!idCheck.test(user_id.value)) {
    alert("아이디는 영문자+숫자 조합으로 6~12자리 사용해야 합니다.");
    user_id.focus();
    return false;
  };
  //아이디 유효성검사
  if (user_id.value == "") { //해당 입력값이 없을 경우 같은말: if(!uid.value)
    alert("아이디를 입력하세요.");
    user_id.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
    return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
  };

//비밀번호============================================= 
  //비밀번호 정규식
  var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (!pwdCheck.test(user_pw.value)) {
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
    user_pw.focus();
    return false;
  };
  //비밀번호 유효성검사
  if (user_pw.value == "") {
    alert("비밀번호를 입력하세요.");
    user_pw.focus();
    return false;
  };

//비밀번호 확인============================================= 
  //비밀번호 확인 유효성검사
  if (repw.value !== user_pw.value) {
    alert("비밀번호가 일치하지 않습니다..");
    repw.focus();
    return false;
  };

//이름=============================================
  //이름 정규식 
  var nameCheck = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
  if (!nameCheck.test(user_name.value)) {
    alert("이름은 한글,영문만 사용해야 합니다.");
    user_name.focus();
    return false;
  };
  //이름 유효성검사
  if (user_name.value == "") {
    alert("이름을 입력하세요.");
    user_name.focus();
    return false;
  };

//휴대폰 번호=============================================
  var reg = /^[0-9]+/g; //숫자만 입력하는 정규식
  if (!reg.test(ph_num.value)) {
    alert("전화번호는 숫자만 입력할 수 있습니다.");
    ph_num.focus();
    return false;
  }



  
  if (user_email.value == "") {
    alert("이메일 주소를 입력하세요.");
    user_email.focus();
    return false;
  }

  //입력 값 전송
  document.join_form.submit(); //유효성 검사의 포인트   
}

//아이디 중복체크 팝업창(현재 공백문서)
function id_check() {
  //window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
  window.open("", "", "width=600, height=200, left=200, top=100");
}

//이메일 옵션 선택후 주소 자동 완성
function change_email() {
  var email_add = document.getElementById("email_add");
  var email_sel = document.getElementById("email_sel");

  //지금 골라진 옵션의 순서와 값 구하기
  var idx = email_sel.options.selectedIndex;
  var val = email_sel.options[idx].value;

  email_add.value = val;
}
