// 날짜
var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = year + '-' + month  + '-' + day;

document.getElementById("date").innerHTML = dateString;


// 유저아이디

// 태그추가
function changeFn(){
  var teg  = document.getElementById("teg");
  var value = (teg.options[teg.selectedIndex].value);
  document.getElementById("txt").innerHTML =(value);
};


// 