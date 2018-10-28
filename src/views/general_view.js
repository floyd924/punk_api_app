const PubSub = require('../helpers/pub_sub.js');

const BottleView = function(container){
  this.container = container;
};


//bindevents:
BottleView.prototype.bindEvents = function () {
  //subscribe to Beer_model:all-beer-data-ready
  PubSub.subscribe('Beer_model:all-beer-data-ready', (event) => {
    const bottles = event.detail;
    bottles.forEach((bottle, index) => {
      this.renderSelection(bottle, index);
    });
  });


  this.listenForClick();
  this.listenForFilter();




};








BottleView.prototype.renderSelection = function (bottle) {
  const bottleBox = document.createElement('div');
  bottleBox.setAttribute('id', bottle.id);
  bottleBox.setAttribute('class', "bottle-box");
  console.log("this ID is now:", bottleBox.id);

  const bottleName = document.createElement('h2');
  bottleName.setAttribute('class', "bottle-name");
  bottleName.textContent = bottle.name;
  bottleBox.appendChild(bottleName);

  const bottleImage = document.createElement('img');
  bottleImage.setAttribute('class', "bottle-image");
  bottleImage.src = bottle.image_url;
  bottleBox.appendChild(bottleImage);

  const bottleDetailsList = document.createElement('ul');
  bottleDetailsList.setAttribute('class', "unordered-list");
  bottleBox.appendChild(bottleDetailsList);
  // this.populateList(bottle, index);

  const bottleABV = document.createElement('li');
  bottleABV.setAttribute('class', "list-item");
  bottleABV.textContent = `ABV: ${bottle.abv} %`;
  bottleDetailsList.appendChild(bottleABV);

  const bottleDescription = document.createElement('li');
  bottleDescription.setAttribute('class', "list-item");
  bottleDescription.textContent = bottle.description;
  bottleDetailsList.appendChild(bottleDescription);

  this.container.appendChild(bottleBox);

};

// bottleView.prototype.populateList = function (bottle, index) {
//   const
// };


BottleView.prototype.listenForClick = function () {

  this.container.addEventListener('click', (event) => {
    console.log("event target:", event.target);
    const selectedBeer = event.target.id;

    PubSub.publish('General_view:change', selectedBeer)
  });
  // console.log("listening for a click");
};

BottleView.prototype.listenForFilter = function (event) {
  // console.log("listening for a filter");

  const array = document.querySelectorAll('.nav-item');
  array.forEach( (option) => {
    option.addEventListener('click', (event) => {
      console.log("the result is:", event.target.id);
    })
  })




};

//listen for a click, and publish when heard, on: General_view:change

//listen for a click on filter, and publish the string on General_view:filter

module.exports = BottleView;
