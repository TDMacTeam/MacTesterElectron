'use strict'

const si = require('systeminformation')
const smc = require('smc')

exports = module.exports = {}

exports.pollBattery = function() {

}

exports.cpuInfo = function() {
  si.cpu()
    .then(data => console.log(data))

  // Unable to use because of Node version mismatch between
  // version built on npm and local node version
  // npm install osx-temperature-sensor --save
  // si.cpuTemperature()
  //   .then(data => console.log(data))

  si.battery()
    .then(data => console.log(data))

  si.system()
    .then(data => console.log(data))

  si.osInfo()
    .then(data => console.log(data))

  si.inetChecksite('https://google.com')
    .then(data => console.log(data))

  console.log(smc.metrics)
}
