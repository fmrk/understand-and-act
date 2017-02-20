$(document).foundation();
$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
   responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }]
});