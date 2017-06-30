'use strict'

const {ipcRenderer} = require('electron')
let {pollBattery, sysInfo} = require('./js/macInteraction.js')

let closeEl = document.querySelector('.close')
closeEl.addEventListener('click', () => {
  ipcRenderer.send('close-main-window');
});

pollBattery()
sysInfo()
