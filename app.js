'use strict';



function Image(name, path) {
  this.name = name;
  this.path = path;
  this.timesShown = 0;
  this.timesClicked = 0;
  renderedImgs.push(this);
};

var bag = new Image('bag', 'Images/bag.jpg');
var banana = new Image('banana', 'Images/banana.jpg');
var bathroom = new Image('bathroom','Images/bathroom.jpg');
var boots = new Image('boots','Images/boots.jpg');
var breakfast = new Image('breakfast','Images/breakfast.jpg');
var bubblegum = new Image('bubblegum','Images/bubblegum.jpg');
var chair = new Image('chair','Images/chair.jpg');
var cthulhu = new Image('cthulhu','Images/cthulhu.jpg');
var dogDuck = new Image('dogDuck','Images/dog-duck.jpg');
var dragon = new Image('dragon','Images/dragon.jpg');
var pen = new Image('pen','Images/pen.jpg');
var petSweep = new Image('petsweep','Images/pet-sweep.jpg');
var scissors = new Image('scissors','Images/scissors.jpg');
var shark = new Image('shark','Images/shark.jpg');
var sweep = new Image('sweep','Images/sweep.png');
var tauntaun = new Image('tauntaun','Images/tauntaun.jpg');
var unicorn = new Image('unicorn','Images/unicorn.jpg');
var usb = new Image('usb','Images/usb.gif');
var waterCan = new Image('watercan','Images/water-can.jpg');
var wineGlass = new Image('wineglass','Images/wine-glass.jpg');

var productArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
var renderedImgs = [];
var usedArray = [];


function newThree() {
  for (var i = 0; i < 3; i++) {
    var ranNum = Math.floor(Math.random() * productArray.length);
    debugger;
    imageMaker(productArray[ranNum]);
    var click = document.getElementById(productArray[i].id);
    click.addEventListener('click', handleClick);
    usedArray.push(productArray[ranNum]);
    productArray.splice(ranNum, 1);
  }
}

function imageMaker(obj) {
  for (var i = 0; i < 3; i++) {
    var anchor = document.getElementById('imgs-here');
    var imageTag = document.createElement('img');
    imageTag.setAttribute('src', obj.path);
    imageTag.setAttribute('id', obj.id);
    anchor.appendChild(imageTag);
  }
};
newThree();

// function usedImages() {
//   for (i = 0; i < 3; i++) {
//     var usedAnchor = document.getElementById('img');
//     usedAnchor.innerText = ' ';
//   }
// }
//
// function oldToNew() {
//
// }
