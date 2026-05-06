// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // grabbing stuff from page
  const facePic = document.querySelector("#explore img");
  const textInput = document.getElementById("text-to-speak");
  const voiceMenu = document.getElementById("voice-select");
  const button = document.querySelector("button");

  const synth = window.speechSynthesis;
  let allVoices = [];

  function loadVoices() {
    allVoices = synth.getVoices();

    // reset dropdown
    voiceMenu.innerHTML = '<option disabled selected>Select Voice:</option>';

    allVoices.forEach((v, i) => {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = v.name;
      voiceMenu.appendChild(option);
    });
  }

  button.addEventListener("click", function () {
    const words = textInput.value;

    const thing = new SpeechSynthesisUtterance(words);

    const pick = voiceMenu.value;
    thing.voice = allVoices[pick];

    // mouth open when talking
    thing.onstart = function () {
      facePic.src = "assets/images/smiling-open.png";
      facePic.alt = "open mouth";
    };

    // back to normal after
    thing.onend = function () {
      facePic.src = "assets/images/smiling.png";
      facePic.alt = "normal face";
    };

    synth.speak(thing);
  });

  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}