var swiper = new Swiper(".mySwiper", {
  enabled:true,
  momentum:true,
  momentumBounce:true,
  momentumVelocityRatio	:true,
  momentumRatio	:true,
  autoplay: {
    delay: 5000,
    speed: 1300,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$('.center').slick({
    arrows: false,
    slidesToShow: 3,
    speed: 500,
    infinite: true,
    draggable: false,
    focusOnChange: false,
    easing: 'linear',
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            centerMode: true,
            slidesToShow: 3
        }
        },
    ]
});