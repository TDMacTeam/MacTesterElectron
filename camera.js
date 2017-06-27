'use strict'

window.onload = function(e) {
  loadCamera();
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

function getUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
}
