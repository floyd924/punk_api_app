const BeerData = require('./models/beer_model.js');
const BottleView = require('./views/general_view.js');
const SpecificView = require('./views/specific_view.js');
const ErrorView = require('./views/error_view.js');

document.addEventListener("DOMContentLoaded", function () {
  console.log("javascript loaded");

  const errorView = new ErrorView('#main-space')
  errorView.bindEvents();


  const data = new BeerData;
  data.getData();

  var mainSpace = document.querySelector('#main-space')
  const bottleView = new BottleView(mainSpace)
  bottleView.bindEvents();

  // var bottleSpace = document.querySelector('div .bottle-box')
  // const specificBeer = new SpecificView(bottleSpace);

  var bottleSpace = document.querySelector('#main-space')
  const specificBeer = new SpecificView(bottleSpace);
  specificBeer.bindEvents();
});
