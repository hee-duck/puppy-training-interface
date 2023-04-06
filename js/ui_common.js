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
            $('.edu_info_txt').addClass('on')
        }
    });
  });

  // edu_join움직임
  $(document).ready(function(){
    $(window).scroll(function(){
        var hei = $(document).scrollTop();
        if(hei > 700){
            $('.edu_join_inner').children().addClass('on')
        }
    });
  });


