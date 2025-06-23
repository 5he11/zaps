AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});

jQuery(document).ready(function ($) {

  "use strict";

  var checkout = function () {
    $('.buy-now').on('click', function (e) {
      var count = $('input.item-count').val();
      var itemid = $('.buy-now').attr('data-itemid');
      document.location.href = `checkout.html?item=${itemid}&count=${count}`;
    });
  };
  checkout();
});