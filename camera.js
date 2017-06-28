'use strict'

window.onload = function(e) {
  init();
}

function init() {
  if (!hasUserMedia()) {
    alert('Oh snap!');
  } else {
    loadCamera();
  }
}

function loadCamera() {
  navigator.webkitGetUserMedia({video: true},
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
