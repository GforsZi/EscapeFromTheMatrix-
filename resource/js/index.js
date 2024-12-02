function detectMobile() {
  return /mobi | Android | iphone | ipad | ipod | BlackBarry | IEMobile | Opera mini/i.test(
    navigator.userAgent
  );
}

const staggerVisualizerEl = document.querySelector(".stagger-visualizer");
const fragment = document.createDocumentFragment();
const numberOfElements = 81;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement("div"));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime
  .timeline({
    targets: ".stagger-visualizer div",
    easing: "easeInOutSine",
    delay: anime.stagger(50),
    autoplay: false,
    loop: false,
    duration: 600,
    loopComplete: a => task("end")
    //update: () => console.log(staggersAnimation.progress)
  })
  .add({
    scale: anime.stagger([2.5, 1], { from: "center", grid: [9, 9] }),
    translateX: anime.stagger([-100, 100]),
    rotate: anime.stagger([-45, 45]),
    easing: "easeInOutCirc",
    delay: anime.stagger(10, { from: "center" })
  })
  .add({
    scale: anime.stagger([2.5, 1], {
      from: "center",
      easing: "easeInOutCirc"
    }),
    translateX: anime.stagger([-200, 200]),
    translateY: anime.stagger([-200, 200]),
    rotate: 0,
    delay: anime.stagger(1, { from: "last" })
  })
  .add({
    rotate: anime.stagger(2, {
      from: "center",
      direction: "reverse",
      easing: "easeInSine"
    }),
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(10, { from: "center" })
  })
  .add({
    scale: anime.stagger([2, 1], { grid: [9, 9], axis: "y" }),
    translateY: anime.stagger([-100, 200], { grid: [9, 9], axis: "y" }),
    rotate: 0,
    delay: anime.stagger(1, { from: "last" })
  })
  .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    scale: anime.stagger([1.5, 0.5], { from: "center" }),
    rotate: anime.stagger([10, -10], { from: "last" }),
    delay: anime.stagger(50, { from: "center", grid: [9, 9] })
  })
  .add({
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    rotate: anime.stagger([-10, 10], { from: "last" }),
    scale: 1,
    delay: anime.stagger(50, { from: "center", grid: [9, 9] })
  })
  .add({
    translateX: 0,
    translateY: anime.stagger(6, { from: "center", direction: "reverse" }),
    rotate: 0,
    delay: anime.stagger(50, { from: "center", grid: [9, 9] })
  })
  .add({
    translateX: anime.stagger("1rem", {
      grid: [9, 9],
      from: "center",
      axis: "x"
    }),
    //translateY: anime.stagger('1rem', {grid: [9, 9], from: 'center', axis: 'y'}),
    delay: anime.stagger(200, {
      grid: [9, 9],
      from: "center",
      direction: "reverse"
    })
  })
  .add({
    translateX: anime.stagger([25, -25], { from: "first" }),
    translateY: 0,

    delay: anime.stagger(10, { from: "first" })
  })

  .add({
    translateX: 0,
    translateY: 0,
    scale: 1,
    rotate: 270,
    duration: 2000,
    delay: 0
  });

function task(condition) {
  if (condition == "end") {
    document.querySelector(".btn-on").classList.add("btn-back");
  } else {
    console.log("yoi");
  }
}

const smlSound = new Audio("./resource/assets/audio/pagiku_cerahku.mp3");
smlSound.loop = true;
document.querySelector(".btn-on").addEventListener("click", () => {
  document.getElementById("body-2").classList.remove("visibility-h-only");
  localStorage.setItem("logValue", "login");
  // if (smlSound.paused) {
  //     smlSound.play();
  //   }
});

document.querySelector("#q-btn").addEventListener("click", () => {
  document.getElementById("body-q").classList.remove("visibility-h");
  document.getElementById("body-q").classList.add("visibility-v");
});

document.querySelector("#close-q").addEventListener("click", () => {
  document.getElementById("body-q").classList.remove("visibility-v");
  document.getElementById("body-q").classList.add("visibility-h");
});

document.querySelector("#s-btn").addEventListener("click", () => {
  document.getElementById("body-s").classList.remove("visibility-h");
  document.getElementById("body-s").classList.add("visibility-v");
});

document.querySelector("#close-s").addEventListener("click", () => {
  document.getElementById("body-s").classList.remove("visibility-v");
  document.getElementById("body-s").classList.add("visibility-h");
});

document.querySelector("#btn-logout").addEventListener("click", () => {
  document.getElementById("body-2").classList.add("visibility-h-only");
  document.querySelector(".btn-on").classList.remove("btn-back");
  localStorage.setItem("logValue", "logout");
  staggersAnimation.play();
});

if (localStorage.getItem("logValue") == "login") {
  document.getElementById("body-2").classList.remove("visibility-h-only");
} else {
  localStorage.setItem("logValue", "logout");
  staggersAnimation.play();
}

window.onload = function () {
  if (detectMobile()) {
    console.log("mobile");
  }
};
