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
      $('.results-item').innerHTML = ''; //This part just empties your listings so you're not repeating them.
      data.forEach(function(item) {
        renderTemplate(item);
      });
    }



    // var results = (sortByName(results));


    // var dropDown = function(selected) {
    //   return sortByName(results);
    // };

    // function dropDownSort() {
    //   var selected = $(".dropdown option:selected").text();
    //   if (selected == "Lowest Price") {
    //     console.log("Hello!");
    //   }
    // }

    // var selected =


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