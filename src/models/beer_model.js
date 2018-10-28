const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BeerData = function(){
  this.data = null;
};

// app. js will call the getData
//which gets the data and stores up on line 5
// and then calls the bindevents method, which has subscriptions


BeerData.prototype.getData = function (beerInfo) {
  // const addy = 'https://api.punkapi.com/v2/beers';

  const newRequest = new Request('https://api.punkapi.com/v2/beers');
  newRequest.get()
  .then((data) => {
    this.data = data
    PubSub.publish('Beer_model:all-beer-data-ready', this.data);
    console.log(this.data);
  })
  //send all data to view. let the view apply the filter
  .catch((error) => {
    PubSub.publish('Beer_model:error', error);
  })
  // call bindevents method, which is below
  this.bindEvents();


};



  //below this is the bindevents method
BeerData.prototype.bindEvents = function () {

  //subscribe to a click notification
  PubSub.subscribe('General_view:change', (event) => {
    const index = event.detail;
    // console.log("index", index);
    //call a publish method when click is received
    // console.log("details on line 41", this.data);
    this.specificBeerDetails(index);
  })

  //subscribe to a filter listener
  PubSub.subscribe('General_view:filter', (event) => {
    const category = event.detail;
    //call filter function below based on a string input
    this.applyFilter(category);
  })
};


// method to publish data of sepcific thing.
BeerData.prototype.specificBeerDetails = function (index) {

  const numero = index -1;
  const specificBeer = this.data[numero];

  // console.log("detail is now", specificBeer);
  //that is an object of the beer
  PubSub.publish('Beer_model:specific-beer-data-ready', specificBeer)
};


//filter function and publish
BeerData.prototype.applyFilter = function (category) {

  //apply the filter
  //export it to the view

};

module.exports = BeerData;
