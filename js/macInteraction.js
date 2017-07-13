'use strict'

const si = require('systeminformation')

exports = module.exports = {}

exports.pollBattery = function(win) {
  si.battery()
    .then(data => {
      let batteryEl = document.getElementById('battery')
      if (data.hasbattery) {
        batteryEl.innerHTML = "Battery: Cycles: " + data.cyclecount + " Charging: " + data.ischarging
      } else {
        batteryEl.innerHTML = "Battery: Not installed"
      }
    })
}

exports.sysInfo = function(win) {
  let serialEl = document.getElementById('serial')
  si.system().then(data => serialEl.innerHTML = "Serial: " + data.serial)
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
