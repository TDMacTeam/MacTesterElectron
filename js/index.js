'use strict'

const {ipcRenderer} = require('electron')

let closeEl = document.querySelector('.close');
closeEl.addEventListener('click', () => {
  ipcRenderer.send('close-main-window');
});
