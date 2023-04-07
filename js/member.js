/* 회원가입 문자열 체크 */
    /* 아이디 부분, 영문과 글자수만 체크 */
    let firstLetter = /^[a-z]/; /* 첫 글자는 영 소문자로 */
    let specialCharacter = /[`~!@#$%^&*|\\\'\";:?]/; /* 특수문자 */
    let upperCase = /[A-Z]/; /* 대문자 */
    let kor_space = /[ㄱ-힣 ]/; /* 한글과 공백 */

    $("#btn1").click(function(){/* btn1(중복확인) 버튼을 클릭했을 때, 이벤트 발생 */
        if($("#id").val().length < 4 || $("#id").val().length > 12 ){
            /* 아이디의 길이가 4글자 미만, 12글자 초과일 때 */
            alert('아이디의 길이는 최소 4글자, 최대 12글자 입니다.');
            id.select(); /* 작성한 id의 값을 선택해줌 */
            id.focus(); /* 작성한 id의 값으로 커서를 옮겨줌 */
        }else if(!firstLetter.test($("#id").val())){
            /* 아이디의 첫 글자가 영문소문자로 시작하지 않을 때 */
            alert('아이디의 첫 글자는 영소문자로 시작해야 합니다.');
             id.select();
             id.focus();
        }else if(specialCharacter.test($("#id").val())){
            /* 아이디에 특수문자가 최소 1글자라도 포함될 때 */
            alert('아이디는 특수문자를 포함할 수 없습니다.')
             id.select();
             id.focus();
        }else if(upperCase.test($("#id").val())){
            /* 아이디에 영어 대문자가 최소 1글자라도 포함될 때 */
            alert('아이디는 대문자를 포함할 수 없습니다.')
             id.select();
             id.focus();
        }else if(kor_space.test($("#id").val())){
            /* 아이디에 한글 혹은 공백이 최소 1글자 이상 포함될 때 */
            alert('아이디는 한글과 공백을 포함할 수 없습니다.')
             id.select();
             id.focus();
        }else{
            alert('사용 가능한 아이디 입니다.');
        }
    });

    /* 비밀번호 부분 */

    let pwdChk = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*#?&])/; /* 영문 + 숫자 + 특수문자 */
    let pwd_space = /[ ]/; /* 공백 */

    $(function(){
        $('#pwd1').keyup(function(){ /* keyup: 사용자가 키보드를 누르고 떼는 순간 이벤트 발생 */
            $('#chkNotice').html(''); /* .html() -> 선택한 요소 안의 내용을 호출하거나 바꾸어준다. */
        });
        
        /* 비밀번호, 비밀번호 확인 일치 검사 */
$('#pwd2').keyup(function(){
    if($('#pwd1').val() != $('#pwd2').val()){
        /* 비밀번호와 비밀번호 확인란의 값이 일치하지 않을 때 */
        $('#chkNotice').html('비밀번호가 일치하지 않습니다.<br><br>').css('color', 'red'); /* 비밀번호 양식 오류일시 color: red */
        /* 비밀번호 길이 검사 */
            /* 비밀번호의 길이가 4글자 미만이거나, 10글자 초과일 때 */
    }else if($('#pwd1').val().length < 4 || $('#pwd1').val().length > 10){ 
        $('#chkNotice').html('비밀번호의 길이는 4-10글자 사이여야 합니다.<br>').css('color', 'red');
        /* 숫자와 특수문자 포함 */
    }else if(!pwdChk.test($('#pwd1').val())){
        $('#chkNotice').html('비밀번호는 영문, 숫자와 특수문자를 모두 포함해야 합니다.<br>').css('color', 'red');                    
    }else if(pwd_space.test($('#pwd1').val())){
        $('#chkNotice').html('비밀번호는 공백을 포함할 수 없습니다.<br>').css('color', 'red');         
    }else{/* 모든 조건에 충족하고, 비밀번호와 비밀번호 확인란의 값이 일치할 때 */
        $('#chkNotice').html('비밀번호가 일치합니다. 사용 가능합니다.<br>').css('color', 'navy'); /* 일치시 color: darkblue */
        }
     });
});


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
                /* 인증번호를 성공적으로 입력하고나면 입력창이 비활성화됨 */
            $("#num").attr("disabled",true); /* attr - 선택된 개체의 속성을 조작해줌, 
            인증번호 값인 '12345'를 성공적으로 입력하면 true표시 후 비활성화(disabled)됨 */
        }else{/* 인증번호를 다르게 입력했을 경우 */
            alert('인증번호를 다시 한번 확인해 주세요.');
        }
    });