var UI = require('ui');
var ajax = require('ajax');
var Vibe = require('ui/vibe');
var Accel = require('ui/accel');

var main = new UI.Card({
  title: 'kurs.onliner.by',
  subtitle: 'Updating...',
  scrollable: true
});

main.show();
Accel.init();

var URL = 'https://kurs-onliner-by.herokuapp.com/';
var byrCurrency = " BYR\n";

var updateRates = function() {
  main.subtitle("Updating...");
  ajax(
    {
      url: URL,
      type: 'json'
    },
    function(data) {
      main.subtitle("");
      main.body("");
      var content = "NBRB $:\n" + data.usdNbrb + byrCurrency;
      content += "Bank buys $:\n" + data.usdSell + byrCurrency;
      content += "Bank sells $:\n" + data.usdBuy+ byrCurrency;
      content += "NBRB EUR:\n" + data.eurNbrb + byrCurrency;
      content += "Bank buys EUR:\n" + data.eurSell + byrCurrency;
      content += "Bank sells EUR:\n" + data.eurBuy+ byrCurrency;
      main.body(content);
      Vibe.vibrate('short');
    },
    function(error) {
      // Failure!
      console.log('No $$$, sorry');
    }
  );
};

updateRates();

Accel.on('tap', function(e) {
  updateRates();
});