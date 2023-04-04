$(function () {
    tab('#tab', 3);
}); //문서가 준비되면 함수 호출

function tab(e, num) {
    var num = num || 0; //숫자가 정의되지 않으면 0으로 설정
    var menu = $(e).children(); //e로 지정된 요소의 모든 하위 요소를 가져옴
    var con = $(e + '_con').children(); //e+_con으로 지정된 요소의 모든 하위 요소를 가져옵니다.
    var select = $(menu).eq(num); //menu에서 인덱스 num에 있는 요소를 가져와 선택에 저장
    var i = num; //i를 num값으로 저장

    select.addClass('on'); //select로 지정된 요소에 on클래스 추가
    con.eq(num).show(); //con에서 인덱스 num에 요소 표시

    menu.click(function () { //메뉴의 모든 요소에 클릭 이벤트 리스너 추가
        if (select !== null) {
            select.removeClass("on"); //select에서 on클래스 제거
            con.eq(i).hide(); //con에서 인덱스 i에 있는 요소 숨김
        }

        select = $(this); //클릭한 요소에 선택을 설정
        i = $(this).index(); //i를 클릭한 요소의 인덱스로 설정

        select.addClass('on'); //select에 on클래스 추가
        con.eq(i).show(); //con에서 인덱스 i에 요소 표시
    });
}