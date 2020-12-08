/*
  Name: Tammy Liu
  Email Address: Tammy_Liu@student.uml.edu
  Affliation: University of Massachusetts Lowell Computer Science Student
  File: cs.uml.edu/~tliu/HW5
  COMP.4610-201 (91.61) GUI Programming I Assignment: Implementing a Bit of Scrabble with Drag-and-Drop
  source: getbootstrap.com, bootswatch.com, css-tricks.com, youtube.com (Brad Traversy), jqueryvalidation.org, Jesse M. Heines (heines@cs.uml.edu), stackoverflow.com
*/

function buildTiles() {
  var ScrabbleTiles = [];
  ScrabbleTiles["A"] = {
    value: 1,
    "original-distribution": 9,
    "number-remaining": 9,
  };
  ScrabbleTiles["B"] = {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["C"] = {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["D"] = {
    value: 2,
    "original-distribution": 4,
    "number-remaining": 4,
  };
  ScrabbleTiles["E"] = {
    value: 1,
    "original-distribution": 12,
    "number-remaining": 12,
  };
  ScrabbleTiles["F"] = {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["G"] = {
    value: 2,
    "original-distribution": 3,
    "number-remaining": 3,
  };
  ScrabbleTiles["H"] = {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["I"] = {
    value: 1,
    "original-distribution": 9,
    "number-remaining": 9,
  };
  ScrabbleTiles["J"] = {
    value: 8,
    "original-distribution": 1,
    "number-remaining": 1,
  };
  ScrabbleTiles["K"] = {
    value: 5,
    "original-distribution": 1,
    "number-remaining": 1,
  };
  ScrabbleTiles["L"] = {
    value: 1,
    "original-distribution": 4,
    "number-remaining": 4,
  };
  ScrabbleTiles["M"] = {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["N"] = {
    value: 1,
    "original-distribution": 6,
    "number-remaining": 6,
  };
  ScrabbleTiles["O"] = {
    value: 1,
    "original-distribution": 8,
    "number-remaining": 8,
  };
  ScrabbleTiles["P"] = {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["Q"] = {
    value: 10,
    "original-distribution": 1,
    "number-remaining": 1,
  };
  ScrabbleTiles["R"] = {
    value: 1,
    "original-distribution": 6,
    "number-remaining": 6,
  };
  ScrabbleTiles["S"] = {
    value: 1,
    "original-distribution": 4,
    "number-remaining": 4,
  };
  ScrabbleTiles["T"] = {
    value: 1,
    "original-distribution": 6,
    "number-remaining": 6,
  };
  ScrabbleTiles["U"] = {
    value: 1,
    "original-distribution": 4,
    "number-remaining": 4,
  };
  ScrabbleTiles["V"] = {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["W"] = {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["X"] = {
    value: 8,
    "original-distribution": 1,
    "number-remaining": 1,
  };
  ScrabbleTiles["Y"] = {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  ScrabbleTiles["Z"] = {
    value: 10,
    "original-distribution": 1,
    "number-remaining": 1,
  };
  ScrabbleTiles["_"] = {
    value: 0,
    "original-distribution": 2,
    "number-remaining": 2,
  };
  return ScrabbleTiles;
}

let ScrabbleTiles = buildTiles();

let boardState = [
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
];

let currentPlays = []; //tracks x-coordinate, y-coordinate in current play
let totalScore = 0; //keeps track of the total score for Scrabble
let words = []; //use to hold a list of recognize words

$(function () {
  setUpTray();
  setUpTiles();

//makes the board droppable; allows letters to drop in the board
  $(".board").droppable({
    drop: function (event, ui) {
      let position = tileSnap(ui.position.left, ui.position.top);
      let error = validateMove(position.x, position.y, ui.helper);
      if (error !== null) {
        setError(error);
        ui.helper.draggable("option", "revert", true);
        ui.helper.removeAttr("data-board"); //clearing the board for re-validation
        return;
      }
      setError();
      ui.helper.attr("data-x", position.x); //tracks the x position of a tile
      ui.helper.attr("data-y", position.y); //tracks the y position of a tile
      currentPlays.push({ x: position.x, y: position.y });
      boardState[position.x][position.y] = ui.helper.attr(
        "data-letter"
      );
      ui.helper.css({ top: position.top, left: position.left });
      if(ui.helper.attr("data-letter") === "_"){
        $("#idBlankLetter").modal("show"); //shows the modal
      }
    },

    //out when the draggable is no longer over the droppable
    out: function (event, ui) {
      ui.helper.removeAttr("data-board");
    },

    //over when the dragglable is on top of the droppable
    over: function (event, ui) {
      ui.helper.attr("data-board", "1");
    }
  });

//makes the tray droppable; allows letters to drop in the tray
  $(".tray").droppable({
    out: function (event, ui) {
      //out when the draggable is no longer over the droppable
      ui.helper.removeAttr("data-tray");
    },
    over: function (event, ui) {
      //over when the dragglable is on top of the droppable
      ui.helper.attr("data-tray", "1");
    },
    drop: function (event, ui) {
      let error = validateMove(undefined, undefined, ui.helper);
      if (error !== null) {
        setError(error);
        ui.helper.draggable("option", "revert", true);
        ui.helper.attr("data-board", "1"); //tile is reverting to the board
        return;
      }
      setError();
    }
  });

//makes the bag droppable for swaping out tiles
  $(".swap").droppable({
    drop: function (event, ui) {
      swapTile(ui.helper[0]);
    }
  });

  document.querySelector("#submit").addEventListener("click", function () {
    if (currentPlays.length === 0) {
      setError("You have not played any tiles.");
      return;
    }
    console.log(scorePlay());
    totalScore += scorePlay();
    document.querySelector(".scoreWord").innerText = "Score: " + totalScore;
    let playedTiles = document.querySelectorAll("[data-board='1']");
    for (let i = 0; i < playedTiles.length; i++) {
      playedTiles[i].removeAttribute("data-board");
      playedTiles[i].className = "played-letter";
      $(playedTiles[i]).draggable("disable");
    }
    let remainingTiles = document.querySelectorAll(".letter");
    for (let i = 0; i < remainingTiles.length; i++) {
      remainingTiles[i].className = "position" + (i+1) + " letter";
      remainingTiles[i].style = "";
    }
    for (let i = remainingTiles.length; i < 7; i++) {
      letter = drawTile();
      if (letter === null) {
        break;
      }
      img = document.createElement("img");
      img.className = "position" + (i+1) + " letter";
      img.src = "graphics_data/letters/Scrabble_Tile_" + letter + ".jpg";
      img.dataset.letter = letter;
      document.querySelector("#trayContainer").appendChild(img);
    }

    currentPlays = [];
    setUpTiles();
  });

  document.querySelector("#recall").addEventListener("click", recallTiles);
  document.querySelector("#startOver").addEventListener("click", resetGame);
  document.querySelector("#subLetter").addEventListener("click", defBlankLetter);

  //if you leave modal without defining the letter, the letter will return to tray
  $("#idBlankLetter").on("hide.bs.modal", function (){
    let findBlanks = document.querySelectorAll('[data-board="1"][data-letter="_"]'); //when data-baord is true and the letter is blank.
    for (let i = 0; i < findBlanks.length; i++) {
      //this blank does not have a letter defined with it, so it must be the letter that was played
      if (findBlanks[i].dataset.defLetter === undefined) {
        findBlanks[i].style = ""; //resets the letters
        findBlanks[i].removeAttribute("data-x"); //resets the x coordinate of the letter
        findBlanks[i].removeAttribute("data-y");
        findBlanks[i].removeAttribute("data-board");
        findBlanks[i].removeAttribute("data-defLetter");
        document.querySelector("#idBlankLetter .alert-danger").style.visibility = 'hidden';
        //hides modal when you click Submit for submission of the entered letter
        $("#idBlankLetter").modal("hide");
        return;
      }
    }
  });
});

function tileSnap(left, top) {
  //function makes the tiles snap to the center of the letter square on the board
  let x = Math.round((left - 23) / 39.5); //calculates the x position, rounding it if it is a decimal
  let y = Math.round((top - -593) / 39.5); //calculates the y position, rounding it if it is a decimal

  if (x < 0) {
    //checks the value of x and sets it
    x = 0;
  }
  if (x > 14) {
    x = 14;
  }
  left = x * 39.5 + 23; //calculates the x position

  if (y < 0) {
    //checks the value of y and sets it
    y = 0;
  }
  if (y > 14) {
    y = 14;
  }
  top = y * 39.5 + -593; //calculates the y position

  return { left, top, x, y };
}

/*draws tile if there is a tile to be drawn, it will be at random if there is not a tile to be drawn, it will return null*/
function drawTile() {
  let tileCount = 0;
  for (let i = 0; i < 27; i++) {
    tileCount += ScrabbleTiles[Object.keys(ScrabbleTiles)[i]]["number-remaining"];
  }

  if (tileCount === 0) {
    return null;
  }

  let index = Math.floor(Math.random() * tileCount); //index you want to check
  let letter;

  for (let i = 0; i < 27; i++) {
    index -= ScrabbleTiles[Object.keys(ScrabbleTiles)[i]]["number-remaining"];

    if (index < 0) {
      letter = Object.keys(ScrabbleTiles)[i]; // "A", "B", "C", etc.
      break;
    }
  }

  if (letter === undefined){
    return null;
  }

  if (ScrabbleTiles[letter]["number-remaining"] > 0) {
    ScrabbleTiles[letter]["number-remaining"]--;
    let lrtd = document.querySelector("#lrTable .lr-" + letter);
    lrtd.innerText = letter + ": " + ScrabbleTiles[letter]["number-remaining"];
    return letter;
  }
}

function validateMove(x, y, letter) {
  if (letter.attr("data-x") !== undefined) {
    return "You cannot move a tile once it is place. Please click RECALL tiles to start again."
  }

  //no coordinate means it is being moved to the tray
  if (x === undefined || y === undefined){
    return null;
  }

  //checks if the move is a correct move if not, error code shows
  if (boardState[7][7] === null) {
    if (x !== 7 || y !== 7) {
      return "Please start at the star located in the middle of the board.";
    }
    return null;
  }

  if (boardState[x][y] !== null) {
    return "There is already a tile on this square";
  }

  if (currentPlays.length === 0) {
    if (!validateAdjacent(x,y)) {
      return "Please play next to an existing tile.";
    }
  } else {
    //play in a line next to an existing tile.
    if (!validateAdjacent(x,y)) {
      return "Please play next to an existing tile.";
    }

    let lineDirection;
    let lineValue;
    let wordError = null;
    if (currentPlays[0].x === x) {
      lineDirection = "x";
      lineValue = x;
      wordError = validateVerticalWord(x,y);
    } else if (currentPlays[0].y === y) {
      lineDirection = "y";
      lineValue = y;
      wordError = validateHorizontalWord(x,y);
    } else {
      return "Please play your tiles in a line.";
    }
    //if the above checks fail, we return the wordError Statement.
    if (wordError) {
      return wordError;
    }

    for (let i = 0; i < currentPlays.length; i++) {
      if (currentPlays[i][lineDirection] !== lineValue) {
        return "Please play your tiles in a line!";
      }
    }
  }
  return null;
}

function validateHorizontalWord(x,y) {
  let positions = [];
  let i;

  //checks what coordinates can be reach from the given coordinate from the left
  for (i = x - 1; i >= 0; i--) {
    if (!boardState[i][y]) {
      break;
    }
    positions.push(i);
  }

  //checks what coordinates can be reach from the given coordinate from the right
  for (i = x + 1; i <= 14; i++) {
    if (!boardState[i][y]) {
      break;
    }
    positions.push(i);
  }

  for (i = 0; i < currentPlays.length; i++) {
    //checks the index of the array. If it is not in the array, it will return -1. This checks if we can reach all played tiles
    if (positions.indexOf(currentPlays[i].x) === -1) {
      return "Please play a single word.";
    }
  }

  return null;
}

function validateVerticalWord(x,y) {
  let positions = [];
  let i;

  //checks what coordinates can be reach from the given coordinate from the top
  for (i = y - 1; i >= 0; i--) {
    if (!boardState[x][i]) {
      break;
    }
    positions.push(i);
  }

  //checks what coordinates can be reach from the given coordinate from the bottom
  for (i = y + 1; i <= 14; i++) {
    if (!boardState[x][i]) {
      break;
    }
    positions.push(i);
  }

  for (i = 0; i < currentPlays.length; i++) {
    //checks the index of the array. If it is not in the array, it will return -1. This checks if we can reach all played tiles
    if (positions.indexOf(currentPlays[i].y) === -1) {
      return "Please play a single word.";
    }
  }

  return null;
}

//sets up the tiles to be interactive
function setUpTiles() {
  //makes the letters draggable to the tray or the board.
  $(".letter").draggable({
    start: function (event, ui) {
      ui.helper.draggable("option", "revert", false); //setting the start of the draggable letter to false and revert if it is not a valid move
    },
    stop: function (event, ui) {
      if (
        ui.helper.attr("data-board") !== "1" &&
        ui.helper.attr("data-tray") !== "1"
      ) {
        //this handles if the element is dropped outside of the droppable
        ui.helper.css({
          top: ui.originalPosition.top,
          left: ui.originalPosition.left,
        });
      }
    },
  });
}

//sets up the tray with randomized tiles
function setUpTray() {
  let letter;
  let img;
  //used to get seven random tiles
  for (let i = 1; i <= 7; i++) {
    letter = drawTile();
    img = document.createElement("img"); //creates the img element for the new tile drawn
    img.className = "position" + i + " letter"; //creates a new class name element for each random letter drawn
    img.src = "graphics_data/letters/Scrabble_Tile_" + letter + ".jpg"; //find the image of the letter in the letters folder
    img.dataset.letter = letter;
    document.querySelector("#trayContainer").appendChild(img); //appends the letters together in the tray
  }
}

//if given an x or an y, it checks if it is adjacent to a play tile
function validateAdjacent(x,y) {
  //there exists a tile to the left, return true
  if (x > 0 && boardState[x - 1][y]) {
    return true;
  }

  //there exists a tile to the right, return true
  if (x < 14 && boardState[x + 1][y]) {
    return true;
  }

  //there exist a tile to the bottom, return true
  if (y > 0 && boardState[x][y - 1]) {
    return true;
  }

  //there exist a tile to the top, return true
  if (y < 14 && boardState[x][y + 1]) {
    return true;
  }

  return false;
}

//called to set the appropriate error for the wrong move
function setError(error) {
  if (error === undefined){
    document.querySelector('#errorPopUp').style.visibility = 'hidden';
    return;
  }
  document.querySelector('#errorPopUp p').innerText = error;
  document.querySelector('#errorPopUp').style.visibility = 'visible';
}

function scoreLetter(x,y) {
  let letter = boardState[x][y];
  let score = ScrabbleTiles[letter].value;

  if (justPlayed(x,y)) {
    let bonus = isBonus(x,y);
    if (bonus === 'tripLetter') {
      score *= 3;
    } else if (bonus === 'doubLetter') {
      score *= 2;
    }
  }
  return score;
}

function scoreHorizontalWord(x,y) {
  let score = scoreLetter(x,y);

  //score letters to the left from the start position
  for (let i = x - 1; i >= 0; i--) {
    //board is empty, stop looking in this direction
    if (!boardState[i][y]) {
      break;
    }
    score += scoreLetter(i,y);
  }

  //score letters to the right from the start position
  for (let i = x + 1; i <= 14; i++) {
    //board is empty, stop looking in this direction
    if (!boardState[i][y]) {
      break;
    }
    score += scoreLetter(i,y);
  }

  //looking for WORD bonuses to the left from start position
  for (let i = x; i >= 0; i--) {
    //board is empty, stop looking in this direction
    if (!boardState[i][y]) {
      break;
    }

    if (justPlayed(i,y)) {
      let bonus = isBonus(i,y);
      if (bonus === 'tripWord') {
        score *= 3;
      } else if (bonus === 'doubWord') {
        score *= 2;
      }
    }
  }

  //looking for WORD bonuses to the right from start position
  for (let i = x + 1; i <= 14; i++) {
    //board is empty, stop looking in this direction
    if (!boardState[i][y]) {
      break;
    }

    if (justPlayed(i,y)) {
      let bonus = isBonus(i,y);
      if (bonus === 'tripWord') {
        score *= 3;
      } else if (bonus === 'doubWord') {
        score *= 2;
      }
    }
  }

  return score;
}

function scoreVerticalWord(x,y) {
  let score = scoreLetter(x,y);

  //score letters to the top from the start position
  for (let i = y - 1; i >= 0; i--) {
    //board is empty, stop looking in this direction
    if (!boardState[x][i]) {
      break;
    }
    score += scoreLetter(x,i);
  }

  //score letters to the bottom from the start position
  for (let i = y + 1; i <= 14; i++) {
    //board is empty, stop looking in this direction
    if (!boardState[x][i]) {
      break;
    }
    score += scoreLetter(x,i);
  }

  //looking for WORD bonuses to the top from start position
  for (let i = y; i >= 0; i--) {
    //board is empty, stop looking in this direction
    if (!boardState[x][i]) {
      break;
    }

    if (justPlayed(x,i)) {
      let bonus = isBonus(x,i);
      if (bonus === 'tripWord') {
        score *= 3;
      } else if (bonus === 'doubWord') {
        score *= 2;
      }
    }
  }

  //looking for WORD bonuses to the bottom from start position
  for (let i = y + 1; i <= 14; i++) {
    //board is empty, stop looking in this direction
    if (!boardState[x][i]) {
      break;
    }

    if (justPlayed(x,i)) {
      let bonus = isBonus(x,i);
      if (bonus === 'tripWord') {
        score *= 3;
      } else if (bonus === 'doubWord') {
        score *= 2;
      }
    }
  }

  return score;
}

function scorePlay() {
  let playDirection;
  let score = 0;
  if (currentPlays.length > 1) {
    //checks if the letters are being played in a vertical line
    if (currentPlays[0].x === currentPlays[1].x) {
      score += scoreVerticalWord(currentPlays[0].x, currentPlays[0].y); //if true word is played vertically so call this
      playDirection = 'vertical';
    } else {
      score += scoreHorizontalWord(currentPlays[0].x, currentPlays[0].y); //if false word is played horizontally so call this
      playDirection = 'horizontal';
    }
  } else {
    if(isHorizontalWord(currentPlays[0].x, currentPlays[0].y)) {
      score += scoreHorizontalWord(currentPlays[0].x, currentPlays[0].y); //if false word is played horizontally so call this
      playDirection = 'horizontal';
    } else {
      score += scoreVerticalWord(currentPlays[0].x, currentPlays[0].y); //if true word is played vertically so call this
      playDirection = 'vertical';
    }
  }

  for(let i = 0; i < currentPlays.length; i++){
    //checking if we scored vertically already. if yes, score the horizontal word
    if(playDirection === 'vertical' && isHorizontalWord(currentPlays[i].x, currentPlays[i].y)) {
      score += scoreHorizontalWord(currentPlays[i].x, currentPlays[i].y);
    }
    //checking if we scored horizontally already. if yes, score the vericsl word
    if(playDirection === 'horizontal' && isVerticalWord(currentPlays[i].x, currentPlays[i].y)) {
        score += scoreVerticalWord(currentPlays[i].x, currentPlays[i].y);
    }
  }

  return score;
}

//to check if there is a tile to the left or right of the given coordinate
function isHorizontalWord(x,y) {
  //there exists a tile to the left, return true
  if (x > 0 && boardState[x - 1][y]) {
    return true;
  }

  //there exists a tile to the right, return true
  if (x < 14 && boardState[x + 1][y]) {
    return true;
  }

  return false;
}

function isVerticalWord(x,y) {
  //there exist a tile to the bottom, return true
  if (y > 0 && boardState[x][y - 1]) {
    return true;
  }

  //there exist a tile to the top, return true
  if (y < 14 && boardState[x][y + 1]) {
    return true;
  }

  return false;
}

// checks the coordinates for word bonuses
function isBonus(x,y) {
  //checks for triple word bonus
  if (
    (x == 0 && y == 0) ||
    (x == 0 && y == 7) ||
    (x == 0 && y == 14) ||
    (x == 7 && y == 0) ||
    (x == 7 && y == 14) ||
    (x == 14 && y == 0) ||
    (x == 14 && y == 7) ||
    (x == 14 && y == 14)
  ) {
    return 'tripWord';
  }

  //checks for double word bonus
  if (
    (x == 1 && y == 1) ||
    (x == 1 && y == 13) ||
    (x == 2 && y == 2) ||
    (x == 2 && y == 12) ||
    (x == 3 && y == 3) ||
    (x == 3 && y == 11) ||
    (x == 4 && y == 4) ||
    (x == 4 && y == 10) ||
    (x == 7 && y == 7) ||
    (x == 10 && y == 4) ||
    (x == 10 && y == 10) ||
    (x == 11 && y == 3) ||
    (x == 11 && y == 11) ||
    (x == 12 && y == 2) ||
    (x == 12 && y == 12) ||
    (x == 13 && y == 1) ||
    (x == 13 && y == 13)
  ) {
    return 'doubWord';
  }

 //checks for triple letter bonus
  if (
    (x == 1 && y == 5) ||
    (x == 1 && y == 9) ||
    (x == 5 && y == 1) ||
    (x == 5 && y == 5) ||
    (x == 5 && y == 9) ||
    (x == 5 && y == 13) ||
    (x == 9 && y == 1) ||
    (x == 9 && y == 5) ||
    (x == 9 && y == 9) ||
    (x == 9 && y == 13) ||
    (x == 13 && y == 5) ||
    (x == 13 && y == 9)
  ) {
    return 'tripLetter';
  }

  //checks for double letter bonus
  if (
    (x == 0 && y == 3) ||
    (x == 0 && y == 11) ||
    (x == 2 && y == 6) ||
    (x == 2 && y == 8) ||
    (x == 3 && y == 0) ||
    (x == 3 && y == 7) ||
    (x == 3 && y == 14) ||
    (x == 6 && y == 2) ||
    (x == 6 && y == 6) ||
    (x == 6 && y == 8) ||
    (x == 6 && y == 12) ||
    (x == 7 && y == 3) ||
    (x == 7 && y == 11) ||
    (x == 8 && y == 2) ||
    (x == 8 && y == 6) ||
    (x == 8 && y == 8) ||
    (x == 8 && y == 12) ||
    (x == 11 && y == 0) ||
    (x == 11 && y == 7) ||
    (x == 11 && y == 14) ||
    (x == 12 && y == 6) ||
    (x == 12 && y == 8) ||
    (x == 14 && y == 3) ||
    (x == 14 && y == 11)
  ) {
    return 'doubLetter';
  }

  return null;
}

function justPlayed(x,y) {
  for(let i = 0; i < currentPlays.length; i++) {
    if(currentPlays[i].x === x && currentPlays[i].y === y) {
      return true;
    }
  }
  return false
}

function recallTiles() {
  let letters = document.querySelectorAll(".letter");
  let i;
  for (i = 0; i < letters.length; i++) {
    letters[i].style = ""; //resets the letters
    letters[i].removeAttribute("data-x"); //resets the x coordinate of the letter
    letters[i].removeAttribute("data-y");
    letters[i].removeAttribute("data-board");
    letters[i].removeAttribute("data-defLetter");
  }
  for (i = 0; i < currentPlays.length; i++) {
    boardState[currentPlays[i].x][currentPlays[i].y] = null;
  }
  currentPlays = [];
}

function resetGame() {
  //resets the ScrabbleTiles
  ScrabbleTiles = buildTiles();

  //reset games state
  let letters = document.querySelectorAll(".letter, .played-letter");
  for (i = 0; i < letters.length; i++) {
    letters[i].parentNode.removeChild(letters[i]);
  }
  currentPlays = [];

  //reset letters remaining tiles
  let allLetters = Object.keys(ScrabbleTiles);
  for (i = 0; i < allLetters.length; i++) {
    let letter = allLetters[i];
    let lrtd = document.querySelector("#lrTable .lr-" + letter);
    lrtd.innerText = letter + ": " + ScrabbleTiles[letter]["number-remaining"];
  }

  //reset score
  totalScore = 0;
  document.querySelector(".scoreWord").innerText = "Score: " + totalScore;

  setUpTray(); //sets up the tray with random tiles
  setUpTiles(); //makes the tiles interactive

  //reset the board
  for (i = 0; i < 15; i++){
    for(let j = 0; j < 15; j++){
      boardState[i][j] = null;
    }
  }

  //hides modal when you click Yes for reset
  $("#confirmChange").modal("hide");
}

function swapTile(oldLetter) {
  let newLetter = drawTile();

  if (newLetter === null) {
    setError("There are no more tiles.");
    return;
  }

  ScrabbleTiles[oldLetter.dataset.letter]["number-remaining"]++; //increments the letter added back into the bag
  let lrtd = document.querySelector("#lrTable .lr-" + oldLetter.dataset.letter);
  lrtd.innerText = oldLetter.dataset.letter + ": " + ScrabbleTiles[oldLetter.dataset.letter ]["number-remaining"];
  oldLetter.dataset.letter = newLetter; //tracks where the letter is for scoring
  oldLetter.src = "graphics_data/letters/Scrabble_Tile_" + newLetter + ".jpg";
}

function defBlankLetter() {
  let blankLetter = document.querySelector("#idLetter");
  let value = blankLetter.value.toUpperCase();

  if (value === 'A' || value === 'B' || value === 'C' ||
      value === 'D' || value === 'E' || value === 'F' ||
      value === 'G' || value === 'H' || value === 'I' ||
      value === 'J' || value === 'K' || value === 'L' ||
      value === 'M' || value === 'N' || value === 'O' ||
      value === 'P' || value === 'Q' || value === 'R' ||
      value === 'S' || value === 'T' || value === 'U' ||
      value === 'V' || value === 'W' || value === 'X' ||
      value === 'Y' || value === 'Z'
  ) {
      let findBlanks = document.querySelectorAll('[data-board="1"][data-letter="_"]'); //when data-baord is true and the letter is blank.
      for (let i = 0; i < findBlanks.length; i++) {
        //this blank does not have a letter defined with it, so it must be the letter that was played
        if (findBlanks[i].dataset.defLetter === undefined) {
          findBlanks[i].dataset.defLetter = value;
          document.querySelector("#idBlankLetter .alert-danger").style.visibility = 'hidden';
          //hides modal when you click Submit for submission of the entered letter
          $("#idBlankLetter").modal("hide");
          return;
        }
      }
    }
  document.querySelector("#idBlankLetter .alert-danger").innerText = "That is not a valid letter.";
  document.querySelector("#idBlankLetter .alert-danger").style.visibility = 'visible';
}

function getWords(){
  $.get('https://tammyliuxd.github.io/Graphical-User-Interface/HW%208/words.txt').done(function(resp) {
    words = resp.split("\n").filter(function (el) {return el.length !== 0; }); //split into a list of words, filtering empty strings out of the list
    console.log(words.length);
  });

}
