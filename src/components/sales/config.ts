export const settings = {
  arrow: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: false,
  waitForAnimate: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
