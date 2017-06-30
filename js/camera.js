'use strict'

window.addEventListener('load', init, false);

function init() {
  if (!hasUserMedia()) {
    alert('This device does not support getUserMedia()!')
  } else {
    loadCamera();
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

function hasUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
}
