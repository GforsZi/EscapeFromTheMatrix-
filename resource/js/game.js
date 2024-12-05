function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMatrix() {
  return [
    [randomInt(1, 100), randomInt(1, 100)],
    [randomInt(1, 100), randomInt(1, 100)]
  ];
}

function addMatrices(matrixA, matrixB) {
  return [
    [matrixA[0][0] + matrixB[0][0], matrixA[0][1] + matrixB[0][1]],
    [matrixA[1][0] + matrixB[1][0], matrixA[1][1] + matrixB[1][1]]
  ];
}

function renderMatrix(matrix) {
  return `
        <div class="matrix">
            ${matrix
              .map(
                row =>
                  `<div class="row">
                            ${row
                              .map(
                                cell => `<div class="matrix-cell">${cell}</div>`
                              )
                              .join("")}
                        </div>`
              )
              .join("")}
        </div>
    `;
}

function checkAnswer(userMatrix, correctMatrix) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (userMatrix[i][j] !== correctMatrix[i][j]) {
        return false;
      }
    }
  }
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const matrixA = generateMatrix();
  const matrixB = generateMatrix();
  const correctMatrix = addMatrices(matrixA, matrixB);

  const questionContainer = document.getElementById("matrix-question");
  questionContainer.innerHTML = `
        ${renderMatrix(matrixA)} 
        <span>+</span>
        ${renderMatrix(matrixB)}
        <span>= ?</span>
    `;

  const form = document.getElementById("matrix-form");
  const resultMessage = document.getElementById("result-message");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const userMatrix = [
      [
        parseInt(document.getElementById("input-0-0").value),
        parseInt(document.getElementById("input-0-1").value)
      ],
      [
        parseInt(document.getElementById("input-1-0").value),
        parseInt(document.getElementById("input-1-1").value)
      ]
    ];

    if (checkAnswer(userMatrix, correctMatrix)) {
      resultMessage.innerHTML =
        "<h3 class='text-success'>Correct!</h3><a href='../../index.html' class='btn btn-success'>Selesain</a>";
    } else {
      location.reload();
    }
  });
});
