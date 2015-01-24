(function() {
  'use strict';

  var results = rawCharlestonData.results;

  $(document).ready(function() {

    //
    //links html element div with .results-list class to
    //
    var $list = $('.results-list');



    //
    // Sorted by price
    //

    $(".dropdown").change(function(sortStuff) {
      if ($(".dropdown option:selected").text() == "Highest Price") {
        results = _.sortBy(results, "price");
      } else if ($(".dropdown option:selected").text() == "Lowest Price") {
        results = _.sortBy(results, "price").reverse();
      }
      renderListings(results);
    });

    function renderListings(data) {
      $('.results-list').innerHTML = '';
      data.forEach(function(result) {

        var resultText = renderTemplate('results-item', {
          title: result.title,
          cost: result.price,
          shop: result.Shop.shop_name,
          image: result.Images[1].url_170x135,
          currency: result.Shop.currency_code
        });

        $list.append(resultText);
      });

    }

    //
    // Relevance View
    //

    results.forEach(function(result) {
      var resultText = renderTemplate('results-item', {
        title: result.title,
        cost: result.price,
        shop: result.Shop.shop_name,
        image: result.Images[1].url_170x135,
        currency: result.Shop.currency_code
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