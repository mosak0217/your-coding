'use strict';




const dt_tags = document.querySelectorAll('.accordion dt');
dt_tags.forEach(dt => {
    dt.addEventListener('click', () => {
        dt.classList.toggle('open');
        dt.nextElementSibling.classList.toggle('open');
    })


  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    autoplay: {
      delay: 3000,
    },
    speed: 500,
    loop: true,
    setWrapperSize: false,
    slidesPerView: 3,
    loopAdditionalSlides: 1,
    mousewheel: true,
      keyboard: true,

      slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：600px以上の場合
    600: {
      slidesPerView: 2,
    },
    // スライドの表示枚数：768px以上の場合
    1025: {
      slidesPerView: 4,
    },
    // スライドの表示枚数：1025px以上の場合
    1025: {
      slidesPerView: 4,
    },
    // スライドの表示枚数：1025px以上の場合
    1140: {
      slidesPerView: 4,
    },
  },
  
  });
});

// ハンバーガーボタン
  
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

// メニューが表示されている時に画面をクリックした場合
$('.header-nav-item').on('click', function() {
// ativeクラスを削除して、メニューを閉じる
$('.globalMenuSp, .hamburger').removeClass('active').removeClass;
});

  




 




