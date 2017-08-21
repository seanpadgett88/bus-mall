'use strict';

var imgArray = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaunt.jpg", "unicorn.jpg", "usb.gif", "water-can.jpg", "wine-glass.jpg"];

function getRandomImage() {
var number = Math.floor(Math.random()*imgArray.length);

  document.write('<img src="Images/'+imgArray[i]+'" />');
}
getRandomImage()






// var randomImage = Math.floor(Math.random()*(imgArray.length - 1));
//
// document.write('<img src="Images/' + imgArray[i] + '"')
