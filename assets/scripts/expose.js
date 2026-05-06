// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // grabbing stuff from html
  const selectThing = document.getElementById("horn-select");
  const volSlider = document.getElementById("volume");
  const volBox = document.getElementById("volume-controls");

  const imgThing = document.querySelector("#expose img");
  const volImg = document.querySelector("#volume-controls img");
  const sound = document.querySelector("audio");
  const btn = document.querySelector("button");

  const confettiStuff = new JSConfetti();

  // when dropdown changes
  selectThing.addEventListener("change", function () {
    if (selectThing.value === "air-horn") {
      imgThing.src = "assets/images/air-horn.svg";
      imgThing.alt = "air horn pic";
      sound.src = "assets/audio/air-horn.mp3";
    } else if (selectThing.value === "car-horn") {
      imgThing.src = "assets/images/car-horn.svg";
      imgThing.alt = "car horn pic";
      sound.src = "assets/audio/car-horn.mp3";
    } else if (selectThing.value === "party-horn") {
      imgThing.src = "assets/images/party-horn.svg";
      imgThing.alt = "party horn pic";
      sound.src = "assets/audio/party-horn.mp3";
    }
  });

  // volume slider changing
  volSlider.addEventListener("input", function () {
    let volNum = Number(volSlider.value);

    sound.volume = volNum / 100;

    if (volNum === 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
      volImg.alt = "mute";
    } else if (volNum < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
      volImg.alt = "low";
    } else if (volNum < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
      volImg.alt = "med";
    } else {
      volImg.src = "assets/icons/volume-level-3.svg";
      volImg.alt = "high";
    }
  });

  // when button clicked
  btn.addEventListener("click", function () {
    sound.play();

    if (selectThing.value === "party-horn") {
      confettiStuff.addConfetti();
    }
  });
}