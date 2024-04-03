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