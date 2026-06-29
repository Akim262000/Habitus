const toggler = document.querySelector(".navbar-toggler");
const overlay = document.querySelector(".overlay");

toggler.addEventListener("click", function () {
  this.classList.toggle("open");
  overlay.classList.toggle("show");
});


$(".look-inside-slider").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 300,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});
