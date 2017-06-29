'use strict'

const si = require('systeminformation')
const {ipcRenderer} = require('electron')

exports = module.exports = {}

exports.pollBattery = function() {
  si.battery()
    .then(data => ipcRenderer.send('batteryData', data))
}

exports.sysInfo = function() {
  var response = {}
  si.system().then(data => Object.assign(response, data))
  si.osInfo().then(data => Object.assign(response, data))
  return response
}

exports.networkInfo = function() {
  si.inetChecksite('https://google.com').then(data => console.log(data))
}

exports.cpuInfo = function() {
  si.cpu()
    .then(data => console.log(data))

  // Unable to use because of Node version mismatch between
  // version built on npm and local node version
  // npm install osx-temperature-sensor --save
  // si.cpuTemperature()
}
