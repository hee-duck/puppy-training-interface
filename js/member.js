/* 회원가입 문자열 체크 */
    /* 아이디 부분 */

    /* 비밀번호 부분 */

    
/* 이메일 부분 */
$('#selectEmail').change(function(){
    $("#selectEmail option:selected").each(function () {
         if($(this).val()== '1'){ //직접입력일 경우
              $("#email2").val('');                        //값 초기화
              $("#email2").attr("disabled",false); //활성화
         }else{ //직접입력이 아닐경우
              $("#email2").val($(this).text());      //선택값 입력
              $("#email2").attr("disabled",true); //비활성화
         }
    });
 });

                /* 휴대폰 번호 부분 */

 /* 인증번호 발송 부분 */
    $("#btn2").click(function(){
        if($("#phone1").val().length == 4 && $("#phone2").val().length == 4){ /* 010 뒤에 8글자 입력해야만 전송 */
            alert('인증번호 발송이 완료되었습니다.\n휴대폰에서 인증번호 확인을 해주십시오.');
        }else{
            alert('휴대폰 번호를 올바르게 입력해 주세요.');
        }
        });
  
/* 인증번호 확인 부분 */
    $('#btn3').click(function(){
        if($('#num').val()=="12345"){ /* 인증번호를 '12345'로 정확히 입력했을 때 */
            alert('휴대폰 인증이 완료 되었습니다.');
            $("#num").attr("disabled",true); 
        }else{
            alert('인증번호를 다시 한번 확인해 주세요.');
        }
    });