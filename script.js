function showSidebar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function hideSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}

// slick slider

$('.card-section').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	
