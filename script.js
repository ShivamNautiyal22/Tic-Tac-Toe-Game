const boxes = document.querySelectorAll(".box");
const box1 = document.querySelector("box-1");
const box2 = document.querySelector("box-2");
const box3 = document.querySelector("box-3");
const box4 = document.querySelector("box-4");
const box5 = document.querySelector("box-5");
const box6 = document.querySelector("box-6");
const box7 = document.querySelector("box-7");
const box8 = document.querySelector("box-8");
const box9 = document.querySelector("box-9");
const turnValue = document.querySelector(".turn-value");

let Turn = "X";
boxes.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      if (elem.textContent === "") {
        elem.textContent = Turn; 
        Turn = Turn === "X" ? "O" : "X"; 
        turnValue.textContent = Turn;
      }
    });
  });

// Reset Button
const reset = document.querySelector(".reset");
let arrofBox = Array.from(boxes);

reset.addEventListener("click", () => {
    Turn = "X"
  turnValue.textContent = Turn;
  for (let i = 0; i <= arrofBox.length; i++) {
    arrofBox[i].textContent = "";
  }
});
