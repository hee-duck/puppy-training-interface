/* // 상위메뉴 누르면 하위메뉴 아코디언 ===> 아코디언만 되고 ol 요소 링크 전환이 안되서 주석처리
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
 */


// 슬라이드 오픈
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


$(document).ready(function() {
  // 처음 모든 ol(하위메뉴) 숨김 처리
  $('.menu-name li ol').hide();
  
  // li를 클릭하면 ol 펼치기, 접기
  $('.menu-name li').click(function() {
    $(this).children('ol').slideToggle();
  });
  
  // ol 클릭하면 a 링크로 연결 (이벤트 추가)
  $('.menu-name li ol a').click(function(event) {
    event.stopPropagation(); //stopPropagation : 클릭 이벤트가 li 요소로 버블링되어 토글 기능을 트리거하는걸 막음
    window.location.href = $(this).attr('href');
  });
});



// 딤드 처리(처음엔 display none 햄버거 버튼 누르면 모바일gnb 제외 영역 딤드처리, 버튼 다시 클릭하면 none


// const dimmed = document.querySelector('.dimmed');
// const slideOpen = document.querySelector('#slide-open');
// let isOpen = false;

// dimmed.style.display = 'none';

// slideOpen.addEventListener('click', () => {
//   isOpen = !isOpen;
//   if (isOpen) {
//     dimmed.style.display = 'block';
//     dimmed.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//   } else {
//     dimmed.style.display = 'none';
//   }
// });


$(document).ready(function() {
  $("#slide-open").click(function () {
  if ($(".dimmed").hasClass('on')) {
    $(".dimmed").removeClass('on');

  } else {
    $(".dimmed").addClass('on');
  }
  });
  });







// PC헤더 JQUERY
$(document).ready(function() {
  // 처음 모든 ol(하위메뉴) 숨김 처리
  $('.pc-main-menu').on('mouseenter', function () {
    $('#header').addClass('on');
  })
  $('.pc-main-menu').on('mouseleave', function () {
    $('#header').removeClass('on');
  })
});
