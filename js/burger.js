$(document).ready(function () {
  // 처음 모든 ol(하위메뉴) 숨김 처리
  $('.slide-menu li ol').hide();

  // li에 이벤트 핸들러 추가
  $('.slide-menu li').click(function () {
    // 태그 츨릭하면 모든 ol 태그 나타남
    $('.slide-menu li ol').not($(this).children('ol')).slideUp();

    // 클릭한 li 태그의 자식 ol 태그 클릭
    $(this).children('ol').slideToggle();
  });
});

$(function () {
  $("#slide-open").click(function () {
    if ($("#burgur").hasClass('on')) {
      $("#burgur").removeClass('on');
      $("#slide").removeClass('on');

    } else {
      $("#burgur").addClass('on');
      $("#slide").addClass('on');
    }
  });
});

var dimmed = document.querySelector(".dimmed");
var slideOpen = document.querySelector("#slide-open");

slideOpen.addEventListener("click", function () {
  if (dimmed.style.backgroundColor === "rgba(0, 0, 0, 0.45)") {
    dimmed.style.backgroundColor = "transparent";
  } else {
    dimmed.style.backgroundColor = "rgba(0, 0, 0, 0.45)";
  }
});