$(function () {

  $(".star").rateYo({
    starWidth: "22px",
    normalFill: "#ccccce",
    ratedFill: "#4543E8",
    readOnly: true,
    spacing: "10px"
   // starSvg: '<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"> < path fill- rule="evenodd" clip - rule="evenodd" d = "M10.986 0C11.3667 0 11.7143 0.216101 11.8828 0.557439L14.736 6.33878L21.1155 7.26334C21.4924 7.31796 21.8055 7.58192 21.9231 7.94414C22.0408 8.30635 21.9424 8.70394 21.6695 8.96957L17.0466 13.4695L18.1366 19.8239C18.201 20.1993 18.0466 20.5786 17.7384 20.8023C17.4302 21.026 17.0217 21.0552 16.6848 20.8777L10.9925 17.8781L5.28639 20.8781C4.94947 21.0553 4.5412 21.0258 4.23324 20.802C3.92529 20.5783 3.77107 20.1991 3.83543 19.8239L4.92546 13.4695L0.302517 8.96957C0.0296209 8.70394 -0.0687032 8.30635 0.0489226 7.94414C0.166548 7.58192 0.479703 7.31796 0.8566 7.26334L7.23606 6.33878L10.0893 0.557439C10.2577 0.216101 10.6054 0 10.986 0Z" fill = "#4543E8" /> </svg >'
  });

  $(".star-gold").rateYo({
    starWidth: "22px",
    normalFill: "#ccccce",
    ratedFill: "#F5DB76",
    readOnly: true, 
    spacing: "10px"
  });

  $('.testimonials__slider').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt="arrow-next"></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      }
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

});