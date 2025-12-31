$(document).ready(function () {
  // --- Slick Sliders ---
  $('.multiple-slider-card').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.15,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.15
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.15
        }
      }
    ],
    prevArrow: $('.slid-left'),
    nextArrow: $('.slid-right')
  });

  $('.multiple-slider-seccess').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.15,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.15
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.15
        }
      }
    ],
    prevArrow: $('.success__left'),
    nextArrow: $('.success__right')
  });

  $('.successful-section-slids').slick({
    dots: false,
    infinite:true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    prevArrow: $('.left__slid-arrow'),
    nextArrow: $('.right__slid-arrow')
  });

  $('.hero-box-slider-figer').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.45,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.25
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.45
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.45
        }
      }
    ]
  });

  // --- Sidebar toggle ---
  document.querySelector('.toggle-btn')?.addEventListener('click', function () {
    document.getElementById('sidebar')?.classList.add('active');
  });

  document.querySelector('.close-btn')?.addEventListener('click', function () {
    document.getElementById('sidebar')?.classList.remove('active');
  });

  
});
