window.onclick = function() {
  let selectedColor = document.querySelector('.selected');

  if(event.target.className === 'color randomColor'){
    event.target.classList.add('selected');
    selectedColor.classList.remove('selected');
    selectedColor = document.querySelector('.selected');
  }
  if(event.target.className === 'pixel'){
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}
// Function to clear pixels table
let buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener("click", function() {
  let clearPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < clearPixels.length; index += 1){
    clearPixels[index].style.backgroundColor = "white";
  }
});
// Function to generate board of size 5 to 50
let boardSize = document.getElementById('board-size');
let buttonGenerateBoard = document.getElementById('generate-board');

buttonGenerateBoard.addEventListener('click', function() {
  if (boardSize.value === "") {
    alert("Board inválido!");
  }
  if (parseInt(boardSize.value) < 5) {
    boardSize.value = 5;
  }
  if (parseInt(boardSize.value) > 50) {
    boardSize.value = 50;
  }
  // console.log(parseInt(boardSize.value));
  if (boardSize.value !== "") {
    document.getElementById('pixel-board').remove();
    let newPixelBoard = document.createElement('div');
    newPixelBoard.id = "pixel-board";
    // console.log(newPixelBoard);
    for (let column = 0; column < boardSize.value; column += 1){
      let newPixelLine = document.createElement('div');
      newPixelLine.id = "pixel-line";
      newPixelBoard.appendChild(newPixelLine);
      for (let line = 0; line < boardSize.value; line += 1){
        let pixels = document.createElement('div');
        pixels.className = 'pixel';
        newPixelLine.appendChild(pixels);
        // console.log(pixels);
      }
    }
    document.getElementById('board-container').appendChild(newPixelBoard);
  }
});
// Function to load page with ramdom colors
function randomBackgroundColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  
  // console.log(backgroundColor);
  return backgroundColor;
}
// Applying function on pallete-pallete color but not at the black one
let randomColor = document.getElementsByClassName('randomColor');
for (let i = 0; i < randomColor.length; i += 1) {
    randomColor[i].style.backgroundColor = randomBackgroundColor();;
}
