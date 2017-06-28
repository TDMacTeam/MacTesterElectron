'use strict'

window.onload = function(e) {
  init();
}

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

function hasUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
}
