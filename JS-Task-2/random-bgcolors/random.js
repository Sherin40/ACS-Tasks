// array of colors
const colors = ["purple","orange","brown","red","blue","pink","green","burlywood","orange","yellow"];

// button element
const changeColorBtn= document.getElementById("changeColorBtn");

// body element
const body = document.body;

// object to save the count of each color
const colorCount = {};

// function to change the background color
function changeColor() {
// generate a random index from 0 to 9
const index = Math.floor(Math.random() * 10);
// get the color from the array using the random index
const color = colors[index];
// set the background color of the body
body.style.backgroundColor = color;
// update the color count object
if (colorCount[color]) {
colorCount[color] += 1;
} else {
colorCount[color] = 1;
}
console.log(colorCount);
}

// add click event listener to the button
changeColorBtn.addEventListener("click", changeColor);
