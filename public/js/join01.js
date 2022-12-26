// 동의 모두선택 / 해제
const agreeChkAll = document.querySelector('input[name=agree_all]');
    agreeChkAll.addEventListener('change', (e) => {
    let agreeChk = document.querySelectorAll('input[name=agree]');
    for(let i = 0; i < agreeChk.length; i++){
      agreeChk[i].checked = e.target.checked;
    }
});

function checkFavorite() {
  var checkedFavorite = document.getElementsByName("agree");

  //체크된 값이 하나라도 있을경우 바로 true
  for (var i = 0; i < checkedFavorite.length; i++) {
      if (checkedFavorite[i].checked == true) {
          return true;
      }
  }
  alert("약관에 동의해주세요");
  return false;
}