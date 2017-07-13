'use strict'

const {desktopCapturer} = require('electron')

let ctx = new AudioContext();

function initAudio() {
  console.log("Init audio");
  desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
    if (error) throw error
    console.log(sources)
    for (let i = 0; i < sources.length; ++i) {
      if (sources[i].name == "Tech Defenders Mac Tester") {

        navigator.getUserMedia({ audio: { volume: .5 } }, (stream) => {
          let microphone = ctx.createMediaStreamSource(stream);
          let gain = ctx.createGain();
          gain.gain.value = 0.3;
          microphone.connect(gain);
          gain.connect(ctx.destination);
        }, (error) => {
          console.error(error);
        })
      }
    }
  })
}

initAudio()
