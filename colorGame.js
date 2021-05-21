// var colors = [
//   "rgb(255,255,255)",
//   "rgb(255,255,255)",
//   "rgb(255,255,255)",
//   "rgb(255,255,255)",
//   "rgb(255,255,255)",
//   "rgb(255,255,255)",
// ];

var pickedColor = document.getElementById("pickedColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetB = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var numSquares = 6;

easy.addEventListener("click", easyCl);
hard.addEventListener("click", hardCl);
for (var i = 0; i < numSquares; i++) {
  squares[i].style.background = randomcolor();
}
var targetSquare = Math.floor(Math.random() * squares.length);
var targetColor = squares[targetSquare].style.background;

pickedColor.textContent = targetColor;
console.log(targetSquare, targetColor);
for (var i = 0; i < numSquares; i++) {
  squares[i].addEventListener("click", function () {
    if (targetColor === this.style.background) {
      correctClick(this);
    } else {
      wrongClick(this);
    }
  });
}

// creates a random color in str form as == rgb(a,b,c)
function randomcolor() {
  var a = [5, 10, 0];
  for (var i = 0; i < 3; i++) {
    a[i] = Math.floor(Math.random() * 266);
    console.log(a[i]);
  }
  var str = `rgb(${a[0]},${a[1]},${a[2]})`;

  return str;
}
resetB.addEventListener("click", reset);
function correctClick(sq) {
  message.textContent = "Correct";
  for (var j = 0; j < numSquares; j++) {
    squares[j].style.background = sq.style.background;
  }
  h1.style.background = sq.style.background;
  resetB.textContent = "Play Again?";
  console.log("Right");
}

function wrongClick(sq) {
  message.textContent = "Try Again";
  sq.style.background = "#232323";
  console.log("Wrong");
}

function reset() {
  for (var i = 0; i < numSquares; i++) {
    squares[i].style.background = randomcolor();
  }
  targetSquare = Math.floor(Math.random() * numSquares);
  targetColor = squares[targetSquare].style.background;

  pickedColor.textContent = targetColor;
  resetB.textContent = "NEW COLORS";
  h1.style.background = "steelblue";
  message.textContent = "";
}
function easyCl() {
  console.log("easy button clicked");
  easy.classList.add("selected");
  hard.classList.remove("selected");
  squares[5].style.display = "none";
  squares[4].style.display = "none";
  squares[3].style.display = "none";
  numSquares = 3;
  reset();
}
function hardCl() {
  console.log("hard button clicked");
  hard.classList.add("selected");
  easy.classList.remove("selected");
  squares[5].style.display = "inline";
  squares[4].style.display = "inline";
  squares[3].style.display = "inline";
  numSquares = 6;
  reset();
}
