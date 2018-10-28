const PubSub = require('../helpers/pub_sub.js');

const ErrorView = function(container){
  this.container = container;
};







ErrorView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer_model:error', (error) => {
    const problemo = error.detail;
    console.log(problemo);
    this.showErrorMessage(problemo);
  });
};

ErrorView.prototype.showErrorMessage = function (problemo) {

  const para = document.createElement('h2');
  para.setAttribute('class', 'error-message');
  para.textContent = `Oh no! Looks like there was an error.... I'd better go change the keg...[${problemo}]`;



  console.log(this.container);
  console.log(para);

  const box = document.querySelector('div#main-space');
  box.appendChild(para);

};



module.exports = ErrorView ;
