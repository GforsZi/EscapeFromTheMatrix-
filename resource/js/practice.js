const container = document.querySelector(".stagger-visualizer");

function tampilkanAcak(arrayString) {
  for (let i = 0; i < 12; i++) {
    const indexAcak = Math.floor(Math.random() * arrayString.length);
    container.innerHTML += `<div class="blocks ${arrayString[indexAcak]}">
  <a href="index.html">Click</a>
  </div>`;
  }
}

function animateBlock() {
  anime({
    targets: ".blocks",
    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlock,

    translateX: function () {
      return anime.random(-900, 900);
    },
    translateY: function () {
      return anime.random(-550, 250);
    },
    scale: function () {
      return anime.random(1, 3);
    }
  });
}
animateBlock();
const kataKata = ["blue", "green", "yellow"];
tampilkanAcak(kataKata);
