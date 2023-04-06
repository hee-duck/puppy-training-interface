  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    loop: true,
  });


  // edu_info 움직임
  $(document).ready(function(){
    $(window).scroll(function(){
        var hei = $(document).scrollTop();
        if(hei > 300){
            $('.btn_index_wrap').children().addClass('on')
        }
    });
  });

  // edu_join 움직임
  $(document).ready(function(){
    $(window).scroll(function(){
        var hei = $(document).scrollTop();
        if(hei > 700){
            $('.edu_join_inner').children().addClass('on')
        }
    });
  });

  // store_info 움직임
  $(document).ready(function(){
    $(window).scroll(function(){
        var hei = $(document).scrollTop();
        if(hei > 1200){
            $('.store_info_inner').addClass('on')
        }
    });
  });

  // store_apply 움직임
  $(document).ready(function(){
    $(window).scroll(function(){
        var hei = $(document).scrollTop();
        if(hei > 1800){
            $('.store_apply_inner').addClass('on')
        }
    });
  });

  $(document).ready(function(){
    $(window).scroll(function(){
        var hei = $(document).scrollTop();
        if(hei > 2200){
            $('#sns').addClass('on')
        }
    });
  });



