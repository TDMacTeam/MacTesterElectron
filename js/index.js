'use strict'

const {ipcRenderer} = require('electron')
const macInfo = require('./js/macInteraction.js')

let closeEl = document.querySelector('.close')
closeEl.addEventListener('click', () => {
  ipcRenderer.send('close-main-window');
});

ipcRenderer.on('batteryData', (data) => {
  let batteryEl = document.getElementById('battery')
  batteryEl.innerHTML = data
})

ipcRenderer.on('serialData', (data) => {
  let batteryEl = document.getElementById('serial')
  batteryEl.innerHTML = data
})

macInfo.pollBattery()
