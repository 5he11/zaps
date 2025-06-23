AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});

jQuery(document).ready(function ($) {

  "use strict";

  var items = new Map();
  items.set('51h3x1krywl', { name: 'Fingerprint Padlock', price: 1499 });
  items.set('81-jhvgoqjl', { name: 'Pet Hair Remover', price: 1499 });
  items.set('61cdgxosgnl', { name: 'Fruit Slicer Cup', price: 1399 });

  var init = function () {
    var params = new URLSearchParams(window.location.search);
    var itemid = params.get('item');
    var item = items.get(itemid);
    var count = params.get('count');
    var tbody = $('#order-table-body');
    tbody.empty();
    var row = `
        <tr>
          <td>${item.name} <strong class="mx-2">x</strong> ${count}</td>
          <td>$${(item.price / 100 * count).toFixed(2)}</td>
        </tr>
      `;
    $("#total").html(`$${(item.price / 100 * count).toFixed(2)}`);
    tbody.append(row);
    console.log(item, user);
  };
  init();
});