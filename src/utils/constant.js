export const moviesSetting = {
  dots: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,

  infinite: false,
  arrows: false,
  // autoplay: false,
  // autoplaySpeed: 2000,
  // dotsClass: "slick-dots",
  //cssEase: "ease",
  // focusOnSelect: true,
  // mobileFirst: false,
  // pauseOnFocus: true,
  // pauseOnHover: true,
  // pauseOnDotsHover: true,
  // respondTo: "window",
  rows: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
