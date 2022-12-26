//joinform_check 함수로 유효성 검사
function login_check() {
  //변수에 담아주기
  var user_id = document.getElementById("user_id");
  var user_pw = document.getElementById("user_pw");

  if (user_id.value == "") {
    //해당 입력값이 없을 경우 같은말: if(!uid.value)
    alert("아이디를 입력하세요.");
    user_id.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
    return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
  }
  var idCheck = /^[a-zA-z0-9]{6,12}$/;
  if (!idCheck.test(user_id.value)) {
    alert("아이디는 영문자+숫자 조합으로 사용해야 합니다.");
    user_id.focus();
    return false;
  }
  //아이디 유효성검사

  //비밀번호=============================================
  //비밀번호 정규식
  var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (!pwdCheck.test(user_pw.value)) {
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 사용해야 합니다.");
    user_pw.focus();
    return false;
  }
  //비밀번호 유효성검사
  if (user_pw.value == "") {
    alert("비밀번호를 입력하세요.");
    user_pw.focus();
    return false;
  }
}
