// Copyright Flurin Hunger 2022. All Rights Reserved.
var usd = document.getElementById('priceusd');
var chf = document.getElementById('pricechf');
var eur = document.getElementById('priceeur');
var title = document.getElementById('title');
input = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,CHF,EUR';

//automatic reload every 20 seconds
setInterval(function(){
  reload()
}, 20000);


//reload function
function reload() {
  $.getJSON(input,
    function(data){
      var pricechf = data.CHF;
      var priceusd = data.USD;
      var priceeur = data.EUR;
      usd.innerHTML = '';
      chf.innerHTML = '';
      eur.innerHTML = '';
      $('.pricechf').prepend(pricechf + " CHF");
      $('.priceusd').prepend(priceusd + " USD");
      $('.priceeur').prepend(priceeur + " EUR");
    }
  );
}

//change Functions for Cryptocurrencies
function changeBTC() {
  input = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,CHF,EUR';
  title.innerHTML = 'The Bitcoin price is currently: ';
  reload();
}

function changeETH() {
  input = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,CHF,EUR';
  title.innerHTML = 'The Ethereum price is currently: ';
  reload();
}

function changeDOT() {
  input = 'https://min-api.cryptocompare.com/data/price?fsym=DOT&tsyms=USD,CHF,EUR';
  title.innerHTML = 'The Polkadot price is currently: ';
  reload();
}

function changeAVAX() {
  input = 'https://min-api.cryptocompare.com/data/price?fsym=AVAX&tsyms=USD,CHF,EUR';
  title.innerHTML = 'The Avalanche price is currently: ';
  reload();
}

function changeADA() {
  input = 'https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD,CHF,EUR';
  title.innerHTML = 'The Cardano price is currently: ';
  reload();
}


//change FIAT Functions
function changeClass(value) {
    if (eur.classList.contains('active')) {
    eur.classList.add('wdn-text-hidden');
    eur.classList.remove('active');
  }
  else if (usd.classList.contains('active')) {
    usd.classList.add('wdn-text-hidden');
    usd.classList.remove('active');
  }
  else if (chf.classList.contains('active')) {
    chf.classList.add('wdn-text-hidden');
    chf.classList.remove('active');
  }


  if (value == 'chf') {
    chf.classList.remove('wdn-text-hidden');
    chf.classList.add('active');
  }

  if (value == 'eur') {
    eur.classList.remove('wdn-text-hidden');
    eur.classList.add('active');
  }

  if (value == 'usd') {
    usd.classList.remove('wdn-text-hidden');
    usd.classList.add('active');
  }
}



reload();
