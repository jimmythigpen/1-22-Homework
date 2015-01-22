(function() {
  'use strict';

  var results = rawCharlestonData.results;

  $(document).ready(function() {


    var $list = $('.results-list');

    results.forEach(function(result) {
      var resultText = renderTemplate('results-item', {
        title: result.title,
        cost: result.price,
        shop: result.Shop.shop_name,
        image: result.Images[0].url_170x135
      });
      $list.append(resultText);
    });

  });

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }


})();