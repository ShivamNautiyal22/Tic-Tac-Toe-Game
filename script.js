const boxes = document.querySelectorAll(".box");
const turnValue = document.querySelector(".turn-value");
const reset = document.querySelector(".reset");
const Undo = document.querySelector(".undo");
const Result = document.querySelector(".result-value");

let arrofBox = Array.from(boxes);

let Turn = "X";
let moveHistory = [];
let gameActive = true;

boxes.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    if (elem.textContent === "" && gameActive) {
      elem.textContent = Turn;
      Turn = Turn === "X" ? "O" : "X";
      moveHistory.push(elem);
      turnValue.textContent = Turn;

      let winner = checkWinner();
      if (winner) {
        Result.textContent = winner;
        gameActive = false;
    }
} else if (checkDraw()) {
    Result.textContent = "Tie";
    }
  });
});

// Reset Button

reset.addEventListener("click", () => {
  gameActive = true;
  Turn = "X";
  turnValue.textContent = Turn;
  moveHistory = [];
  for (let i = 0; i < arrofBox.length; i++) {
    arrofBox[i].textContent = "";
    arrofBox[i].classList.remove("highlight");
  }
  Result.textContent = "...";
});


// Win Code
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (
      arrofBox[a].textContent &&
      arrofBox[a].textContent === arrofBox[b].textContent &&
      arrofBox[a].textContent === arrofBox[c].textContent
    ) {
      arrofBox[a].classList.add("highlight");
      arrofBox[b].classList.add("highlight");
      arrofBox[c].classList.add("highlight");
      return arrofBox[a].textContent; 
    }
  }
  return null; 
};

const checkDraw = () => {
  arrofBox.every((box) => box.textContent !== "" && winner != checkWinner());
};
