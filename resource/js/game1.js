function generateMatrix() {
  return [
    [randomInt(0, 1), randomInt(0, 1), randomInt(0, 1)],
    [randomInt(0, 1), randomInt(0, 1), randomInt(0, 1)],
    [randomInt(0, 1), randomInt(0, 1), randomInt(0, 1)]
  ];
}

function transposeMatrix(matrix) {
  const transposed = [];
  for (let i = 0; i < matrix.length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

function randomTranspose(matrix) {
  const copy = JSON.parse(JSON.stringify(matrix));
  const [i1, j1] = [randomInt(0, 2), randomInt(0, 2)];
  const [i2, j2] = [randomInt(0, 2), randomInt(0, 2)];
  [copy[i1][j1], copy[i2][j2]] = [copy[i2][j2], copy[i1][j1]];
  return copy;
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

function areMatricesEqual(matrixA, matrixB) {
  for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixA[i].length; j++) {
      if (matrixA[i][j] !== matrixB[i][j]) return false;
    }
  }
  return true;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  const originalMatrix = generateMatrix();
  const correctTranspose = transposeMatrix(originalMatrix);
  let currentMatrix = randomTranspose(originalMatrix);

  const matrixContainer = document.getElementById("matrix-container");
  const transposeButton = document.getElementById("transpose-button");
  const resultMessage = document.getElementById("result-message");

  matrixContainer.innerHTML = renderMatrix(currentMatrix);

  transposeButton.addEventListener("click", () => {
    currentMatrix = randomTranspose(currentMatrix);
    matrixContainer.innerHTML = renderMatrix(currentMatrix);

    if (areMatricesEqual(currentMatrix, correctTranspose)) {
      resultMessage.innerHTML =
        "<h3 class='text-success'>Selamat! kode terpecahkan!</h3><a href='../../index.html' class='btn btn-success'>Selesai</a>";
      transposeButton.disabled = true;
    } else {
      resultMessage.innerHTML = "<h3 class='text-warning'>Tetap mencoba!</h3>";
    }
  });
});
