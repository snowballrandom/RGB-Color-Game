// Javascript

console.log('Connected');

var numSquares = 6;
var colors = [];
var pickedColor;

var bgColor = getBackgroundColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {

    // Mode Buttons Click
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {

            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");

            this.classList.add("selected");

            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6
            }
            reset();
        });
    }
}

function setUpSquares() {
    // Set Up Squares
    for (var i = 0; i < squares.length; i++) {

        // Add click listeners to squares
        squares[i].addEventListener("click", function () {

            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            // Compare color to picked color
            if (clickedColor === pickedColor) {
                console.log('Correct');
                resetButton.textContent = 'Play Again';
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = bgColor;
                messageDisplay.textContent = "Try Again!";
            }

        });
    }
}

function reset(){

    // Generate Random Colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color
    pickedColor = pickColor();
    // Set display
    colorDisplay.textContent = pickedColor;
    // Reset Message Display
    messageDisplay.textContent = "";
    // Set Display background to default
    h1.style.backgroundColor = getBackgroundColor();
    // Reset Button Text
    resetButton.textContent = 'New Colors';

    for (var i = 0; i < squares.length; i++) {
        // Add colors to squares
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

}

// Reset Button Click
resetButton.addEventListener("click", function () {
    reset();
});

// Change Colors
function changeColors(color) {

    // Change colors of squares
    for (var i = 0; i < squares.length; i++){
        console.log(colors[i]);
        squares[i].style.backgroundColor = color;
    }
    
}

function fade(){
    for(var i = 0; i < squares.length; i++){
        squares[i].classList.toggle('fade');
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
    return "steelBlue"
    //window.getComputedStyle(document.body, null).getPropertyValue('background-color');
}