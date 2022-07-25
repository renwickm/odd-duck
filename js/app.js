'use strict';

console.log('hey there, hello!');


//**********Global Variables*******************

let totalVotes = 25;
let allProducts = [];

// ************DOM References*******************

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-list');


// ************ Constructor Function************

function Products(name, photo) {
  this.name = name;
  this.photo = photo;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);

}

// *************Object Creation ****************



// ************* Helper Functions ***************



// ************* Event Handlers *****************



// ************* Event Listeners ****************