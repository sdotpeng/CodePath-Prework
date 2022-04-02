/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// Global Variables
var pattern = [1, 2, 4, 3, 2, 5, 3, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var loseCounter = 0;

var cluePauseTime = 333; //how long to pause in between clues

const clueHoldTime = 300; //how long to hold each clue's light/sound
const nextClueWaitTime = 300; //how long to wait before starting playback of the clue sequence

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("mistake").innerHTML = "Mistake: 0";
  // Reset the mistake counter
  loseCounter = 0;
  playClueSequence();
}

function stopGame() {
  // initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  document.getElementById("button" + btn).classList.add("active");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  document.getElementById("button" + btn).classList.remove("active");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here

  // If guess is correct
  if (!(btn == pattern[guessCounter])) {
    // Not correct -> lostCounter < 3?
    if (loseCounter < 2) {
      // No -> Increment lostCounter
      loseCounter++;
      document.getElementById("mistake").innerHTML = "Mistake: " + loseCounter;
      progress++;
      playClueSequence();
    } else {
      // Yes -> Lose game
      document.getElementById("mistake").innerHTML = "Mistake: 3";
      loseGame();
    }
    return;
  }

  // Correct, now check if the turn is over
  if (!(guessCounter == progress)) {
    // Turn is not over -> increase guessCounter
    guessCounter++;
    return;
  }

  // Turn is over, check if it is the last turn
  if (!(progress == pattern.length - 1)) {
    // Not over -> increase progress, play next clue sequence
    progress++;
    playClueSequence();
    return;
  }

  // Over, user wins game
  winGame();
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Yeah! You won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 299.0,
  2: 336.3,
  3: 485.8,
  4: 373.7,
  5: 411.1
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
