'use strict';

var totalClicks = 0;
var maxClicks = 5;

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var paths = ['Images/bag.jpg', 'Images/banana.jpg', 'Images/bathroom.jpg', 'Images/boots.jpg', 'Images/breakfast.jpg', 'Images/bubblegum.jpg', 'Images/chair.jpg', 'Images/cthulhu.jpg', 'Images/dog-duck.jpg', 'Images/dragon.jpg', 'Images/pen.jpg', 'Images/pet-sweep.jpg', 'Images/scissors.jpg', 'Images/shark.jpg', 'Images/sweep.png', 'Images/tauntaun.jpg', 'Images/unicorn.jpg', 'Images/usb.gif', 'Images/water-can.jpg', 'Images/wine-glass.jpg'];
var ids = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

if(localStorage.getItem('totals')) {
  var allItems = JSON.parse(localStorage.getItem('totals'));
} else {
  var allItems = [];
  createItems();
}

function Item (name, filePath, id) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.id = id;
  allItems.push(this);
}

function createItems (){
  for (var i = 0; i < names.length; i++){
    new Item(names[i], paths[i], ids[i]);
  }
}

var thisRound = [];
var lastRound = [];

function makeThreeImages (){
  for (var i = 1; i < 4; i++) {
    var indexNum = Math.floor(Math.random() * allItems.length);
    if (lastRound.includes(indexNum) || thisRound.includes(indexNum)) {
      i--;
    } else {
      thisRound.push(indexNum);
      allItems[indexNum].timesShown++;
      var linkedImage = document.getElementById('image-' + i);
      linkedImage.setAttribute('src', allItems[indexNum].filePath);
      linkedImage.setAttribute('itemIdx', indexNum);
    }
  }
  lastRound = thisRound;
  thisRound = [];
}
makeThreeImages();

for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}
function onClick (event){
  var itemIdx = parseInt(event.target.getAttribute('itemIdx'));
  var itemIWant = allItems[itemIdx];
  itemIWant.timesClicked++;
  makeThreeImages();
  totalClicks++;
  if (totalClicks === maxClicks) {
    for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
      var image = document.getElementById('image-' + (i + 1));
      image.removeEventListener('click', onClick);
    }

    var list = document.getElementById('list');
    for (var j = 0; j < allItems.length; j++) {
      var li = document.createElement('li');
      li.innerText = allItems[j].name + ' was clicked ' + allItems[j].timesClicked + ' times';
      list.appendChild(li);
    };
    localStorage.setItem('totals', JSON.stringify(allItems));
  }
}
