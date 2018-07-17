// Javascript

console.log('Connected');

var colors = generateRandomColors(6);

var bgColor = getBackgroundColor();
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){

    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function () {

        console.log('Clicked square');

        // Grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        // Compare color to picked color
        if(clickedColor === pickedColor){
            console.log('Correct');
            resetButton.textContent = 'Play Again';
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = bgColor;
            messageDisplay.textContent = "Try Again!";
        }

    });
}

// Easy Button Click
easyButton.addEventListener("click", function () {

});

// Hard Button Click
hardButton.addEventListener("click", function () {

});

// Reset Button Click
resetButton.addEventListener("click", function () {

    console.log('Reset Clicked');

    // Generate Random Colors
    colors = generateRandomColors(6);
    // Pick a new random color
    pickedColor = pickColor();
    // Set display
    colorDisplay.textContent = pickedColor;
    // Set Display background to default
    h1.style.backgroundColor = getBackgroundColor();
    // Reset Button Text
    resetButton.textContent = 'New Colors';

    for (var i = 0; i < squares.length; i++) {

        // Add colors to squares
        squares[i].style.backgroundColor = colors[i];
    }

});

// Change Colors
function changeColors(color) {
    // Change colors of squares
    for (var i = 0; i < squares.length; i++){
        console.log(colors[i]);
        squares[i].style.backgroundColor = color;
    }
    
}

// Pick Colors
function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

// Random Colors to Array
function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

// True Randomizer of Colors
function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Get Body Background Colors
function getBackgroundColor(){
    return window.getComputedStyle(document.body, null).getPropertyValue('background-color');
}