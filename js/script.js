var dt_tags = document.querySelectorAll('.accordion dt');
dt_tags.forEach(dt => {
    dt.addEventListener('click', () => {
        dt.classList.toggle('open');
        dt.nextElementSibling.classList.toggle('open');
    })
});


  var swiper = new Swiper(".swiper-container", {
    // Optional parameters
    autoplay: {
      delay: 3000,
    },
    speed: 500,
    loop: true,
    setWrapperSize: false,
    slidesPerView: 3,
  
  });

