'use strict'

window.addEventListener('load', init, false);

function init() {
  if (!hasUserMedia()) {
    alert('This device does not support getUserMedia()!')
  } else {
    loadCamera();
    loadAudio();
  }
}

function loadCamera() {
  navigator.getUserMedia({video: true},
  (stream) => {
    document.getElementById('camera').src = URL.createObjectURL(stream);
  },
  () => {
    alert('Could not connect to stream!')
  });
}

function loadAudio() {
  navigator.getUserMedia({audio: true},
  (stream) => {
    document.getElementById('audio').src = URL.createObjectURL(stream);
  },
  () => {
    alert('Could not connect to stream!')
  });
}

function playAudio() {
  var player = document.getElementById('audio');
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function hasUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
}
