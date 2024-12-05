const colors = ["red", "blue", "green"];

let sequenceCount = 0;
let currentBoxes = [];
let currentPointerIndex = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderBoxes() {
  const boxesContainer = document.getElementById("boxes-container");
  boxesContainer.innerHTML = "";
  currentBoxes.forEach(color => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = color;
    boxesContainer.appendChild(box);
  });
}

function renderButtons() {
  const buttonsContainer = document.getElementById("buttons-container");
  buttonsContainer.innerHTML = "";
  colors.forEach(color => {
    const button = document.createElement("button");
    button.className = `btn btn-${color}`;
    button.style.backgroundColor = color;
    button.addEventListener("click", () => handleButtonClick(color));
    buttonsContainer.appendChild(button);
  });
}

function handleButtonClick(color) {
  const message = document.getElementById("message");

  if (color === currentBoxes[currentPointerIndex]) {
    sequenceCount++;
    if (sequenceCount === 10) {
      message.innerHTML =
        "<h3 class='text-success'>Correct!</h3><a href='../../index.html' class='btn btn-success'>Selesain</a>";
      return;
    }
    message.innerText = `<-- ${10 - sequenceCount} -->`;
    refreshGame();
  } else {
    sequenceCount = 0;
    message.innerText = "Code gagal terpecahkan";
    refreshGame();
  }
}

function refreshGame() {
  currentBoxes = shuffle([...colors]);
  currentPointerIndex = Math.floor(Math.random() * colors.length);
  renderBoxes();
  movePointer();
}

function movePointer() {
  const pointer = document.getElementById("pointer");
  const boxes = document.getElementsByClassName("box");
  const box = boxes[currentPointerIndex];

  const boxPosition =
    box.offsetLeft + box.offsetWidth / 2 - pointer.offsetWidth / 2;

  pointer.style.transform = `translateX(${boxPosition}px)`;
}

document.addEventListener("DOMContentLoaded", () => {
  refreshGame();
  renderButtons();
});
