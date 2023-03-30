function abc(){ //함수로 묶음
var coll = document.getElementsByClassName("collapsible");
//var coll = document.querySelector(".collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active"); //현재 작업이 진행되고 있는 class 
    var content = this.nextElementSibling; //다음 html 요소
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
};