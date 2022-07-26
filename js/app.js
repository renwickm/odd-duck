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

function Products(name, photoExtension = 'jpg') {
  this.name = name;
  this.photo = `assets/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);

}



// *************Object Creation ****************

new Products('sweep', 'png');
new Products('bag');
new Products('banana');
new Products('bathroom');
new Products('boots');
new Products('breakfast');
new Products('bubblegum');
new Products('chair');
new Products('cthulhu');
new Products('dog-duck');
new Products('dragon');
new Products('pen');
new Products('pet-sweep');
new Products('scissors');
new Products('shark');
new Products('tauntaun');
new Products('unicorn');
new Products('water-can');
new Products('wine-glass');


// ************* Helper Functions ***************

function randomIndexGenerator(){
  return Math.floor(Math.random() * allProducts.length);
}

// let productIndexArr = [];

function renderImgs(){

  // while(productIndexArr.length < 3){
  //   let randomNum = randomGen();
  //   if(!productIndexArr.includes(randomNum)){
  //     productIndexArr.push(randomNum);
  //   }
  // }
  let imgOneIndex = randomIndexGenerator();
  let imgTwoIndex = randomIndexGenerator();
  let imgThreeIndex = randomIndexGenerator();

  // let imgOneIndex = productIndexArr.pop();
  // let imgTwoIndex = productIndexArr.pop();
  // let imgThreeIndex = productIndexArr.pop();

  while(imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex){
    imgTwoIndex = randomIndexGenerator();
    imgThreeIndex = randomIndexGenerator();
  }

  imgOne.src = allProducts[imgOneIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].name;
  allProducts[imgOneIndex].views++;

  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].name;
  allProducts[imgTwoIndex].views++;

  imgThree.src = allProducts[imgThreeIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].name;
  allProducts[imgThreeIndex].views++;
}

renderImgs();

// ************* Event Handlers *****************

function handleClick(event){ 

  let imgClicked = event.target.alt;
  
  for(let i = 0; i < allProducts.length; i++){
    if(imgClicked === allProducts[i].name){
      allProducts[i].votes++;
    }
  }
  totalVotes--;

  renderImgs();

  if(totalVotes === 0){
    imgContainer.removeEventListener('click', handleClick);
  }

}

function handleShowResults(){
  if(totalVotes === 0){
    for(let i = 0; i < allProducts.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes, and was seen ${allProducts[i].views} times.`;
      resultsList.appendChild(liElem);
    }
    resultBtn.removeEventListener('click', handleShowResults);
  }
}

// ************* Event Listeners ****************

imgContainer.addEventListener('click', handleClick);
resultBtn.addEventListener('click', handleShowResults);