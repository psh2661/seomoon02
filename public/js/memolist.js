
let accor = document.getElementsByClassName('memolist');


for(i = 0; i < accor.length; i++){
  accor[i].addEventListener('click',function(){
    this.classList.toggle('memo_list_active');
    let next = this.nextElementSibling;
      if(next.style.maxHeight){
        next.style.maxHeight = null;
        next.style.padding = null;
      } else{
        let act = document.querySelectorAll('.memolist.memo_list_active');
        for(j=0; j < act.length; j++){
          act[j].classList.remove('memo_list_active');
          act[j].nextElementSibling.style.maxHeight = null;
          act[j].nextElementSibling.style.padding = null;
        }
        this.classList.add('memo_list_active');
        next.style.maxHeight = '1200px';
        next.style.padding = '30px 0';
      }
  });
}
