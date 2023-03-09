const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("playText");
const restartButton = document.getElementById("restartButton");
const spaces = [];
const O_Text = "O";
const X_Text = "X";
let currentPlayer = O_Text;

const ticTacToeBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += "border-bottom: 3px solid var(--blue);";
    }
    if (index % 3 === 0) {
      styleString += "border-right: 3px solid var(--blue);";
    }
    if (index % 3 === 2) {
      styleString += "border-left: 3px solid var(--blue);";
    }
    if (index > 5) {
      styleString += "border-top: 3px solid var(--blue);";
    }
    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};

const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon()) {
      playText.innerText = `${currentPlayer} has won!`;
      return;
    }
    currentPlayer = currentPlayer === O_Text ? X_Text : O_Text;
  }
};

const playerHasWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top,`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the left,`);
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonally,`);
      return true;
    }
  } else if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the right,`);
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom,`);
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins vertically in the middle,`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins horizontally on the middle,`);
      return true;
    }
  }
};

const restart = () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerText = `Let's Play Tic Tac Toe!`;
  currentPlayer = O_Text;
};

restartButton.addEventListener("click", restart);

restart();
ticTacToeBoard();
