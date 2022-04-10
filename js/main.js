"use strict";

console.log('global');
"use strict";

console.log('ma');
"use strict";

$(function () {
  tabInit();
});

function tabInit() {
  $('.myvertical-tabs').delegate('li:not(.chosen)', 'click', function () {
    $(this).addClass('chosen').siblings().removeClass('chosen').parents('.wrap-myvertical-tabs').find('.myvertical-tabs-content').hide().eq($(this).index()).fadeIn(170);
  });
}

;
$(document).ready(function () {
  $('.nav-btn').click(function () {
    $('.overlay-wrapper').addClass('active');
    $('.nav-wrapper').addClass('active');
  });
  $('.close-nav').click(function () {
    $('.overlay-wrapper').removeClass('active');
    $('.nav-wrapper').removeClass('active');
  });
  $('.overlay').click(function () {
    $('.overlay-wrapper').removeClass('active');
    $('.nav-wrapper').removeClass('active');
  });
  $('.tabs').tabs();
});
$(document).ready(function () {
  $('.team-slider-wrapper').slick({
    dots: true
  });
  $('.slider-progress-inner').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1040,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 900,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
document.querySelector('.load-news').addEventListener('click', function () {
  fetch('../added-news.html').then(function (response) {
    return response.text();
  }).then(function (myContent) {
    document.querySelector('.par').innerHTML = myContent;
    button.remove();
  });
}, false);
document.querySelector('.load-news').addEventListener('click', function () {
  fetch('../added-publications.html').then(function (response) {
    return response.text();
  }).then(function (myContent) {
    document.querySelector('.publication-new').innerHTML = myContent;
    button.remove();
  });
}, false);
//# sourceMappingURL=main.js.map
