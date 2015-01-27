var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'kurs.onliner.by',
  subtitle: 'Updating...',
});

main.show();

var URL = 'https://kurs-onliner-by.herokuapp.com/';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    main.subtitle("");
    main.body("Bank buys $$:\n" + data.usdSell + " BYR\nBank sells $$:\n" + data.usdBuy+ " BYR");
  },
  function(error) {
    // Failure!
    console.log('No $$$, sorry');
  }
);
