

const PubSub = require('../helpers/pub_sub.js');

const SpecificView = function(container){
  this.container = container;
};

SpecificView.prototype.bindEvents = function () {

  // receive on channel Beer_model:specific-beer-data-ready'
  PubSub.subscribe('Beer_model:specific-beer-data-ready', (beer) => {
    const bottle = beer.detail; // this is an object
    //render specific beer
    this.renderBottle(bottle);
  });
};


SpecificView.prototype.renderBottle = function (bottle) {
  //render here
  // console.log(this.container);
  this.container.innerHTML = "";
  // console.log(this.container);

// what other specific stuff do i want to show?

  const bottleBox = document.createElement('div');

  // bottle.id = bottle.id -1;

  bottleBox.setAttribute('id', bottle.id);
  console.log("bottle dot ID",bottle.id);
  bottleBox.setAttribute('class', "bottle-box");

  const bottleName = document.createElement('h2');
  bottleName.setAttribute('class', "bottle-name");
  bottleName.textContent = bottle.name;
  bottleBox.appendChild(bottleName);

  const bottleImage = document.createElement('img');
  bottleImage.setAttribute('class', "bottle-image");
  bottleImage.src = bottle.image_url;
  bottleBox.appendChild(bottleImage);

  const bottleDetailsList = document.createElement('ul');
  bottleBox.appendChild(bottleDetailsList);
  bottleDetailsList.setAttribute('class', "unordered-list");


  const bottleABV = document.createElement('li');
  bottleABV.textContent = `ABV: ${bottle.abv} %`;
  bottleABV.setAttribute('class', "list-item");
  bottleDetailsList.appendChild(bottleABV);

  const bottleDescription = document.createElement('li');
  bottleDescription.textContent = bottle.description;
  bottleDescription.setAttribute('class', "list-item");
  bottleDetailsList.appendChild(bottleDescription);

  this.container.appendChild(bottleBox);


};

module.exports = SpecificView;
