'use strict'

const si = require('systeminformation')

exports = module.exports = {}

exports.pollBattery = function() {

}

exports.cpuInfo = function() {
  si.cpu()
    .then(data => console.log(data))

  // Unable to use because of Node version mismatch between
  // version built on npm and local node version
  // npm install osx-temperature-sensor --save
  si.cpuTemperature()
    .then(data => console.log(data))
    .then(
      si.battery().then(data => console.log(data))
    )
    .then(
      si.system().then(data => console.log(data))
    )
    .then(
      si.osInfo().then(data => console.log(data))
    )
    .then(
      si.inetChecksite('https://google.com').then(data => console.log(data))
    )
}
