'use strict'

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();
var audioInput = null,
    realAudioInput = null,
    inputPoint = null,
    audioRecorder = null;
var recordingStatus = false;
var audioMedia = null;

function initAudio() {
  alert("Init audio")
  navigator.mediaDevices.getUserMedia({audio: true}, (stream) => audioMedia = stream);
}

function toggleRecording() {
  if (!audioMedia) {
    alert("Unable to connect to audio source");
  }

  if (audioMedia && recordingStatus) {
    audioMedia.stop();
  } else {
    audioMedia.start();
  }
}

function playAudio() {
  if (recordingStatus) {
    // Stop recording before we try to play back
    toggleRecording()
  }
  audioMedia.getBuffer(getBufferCallback)
}

function getBufferCallback( buffers ) {
	var newSource = audioContext.createBufferSource();
	var newBuffer = audioContext.createBuffer( 2, buffers[0].length, audioContext.sampleRate );
	newBuffer.getChannelData(0).set(buffers[0]);
	newBuffer.getChannelData(1).set(buffers[1]);
	newSource.buffer = newBuffer;

	newSource.connect( audioContext.destination );
	newSource.start(0);
}

initAudio()
