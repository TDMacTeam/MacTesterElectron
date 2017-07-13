'use strict'

window.addEventListener('load', drawKeyboard, false)
window.addEventListener('keyup', ((status) => {
  return (e) => { renderKeyPress(e, status) }
})('up'), false)
window.addEventListener('keydown', ((status) => {
  return (e) => { renderKeyPress(e, status) }
})('down'), false)

let charPosMap = {
  f: {},
  n: {},
  1: {},
  2: {},
  3: {},
  b: {}
}

function drawKeyboard() {
  let canvas = document.getElementById('kbLayout')
  let ctx = canvas.getContext('2d')

  /*
  Each element in this array is the row of keys associated with that row on
  the keyboard.

  Eg: 1 is on the second row, so it's in the second element of
  the keyMap array.
  */
  let fRow = ['esc']
  for (let i = 1; i < 13; i++) {
    fRow.push('f' + i)
  }
  fRow.push('pwr')

  let numericRow = '`1234567890-='.split('')
  numericRow.push('delete')

  let firstRow = 'qwertyuiop[]\\'.split('')
  firstRow.unshift('tab')

  let secondRow = 'asdfghjkl;\''.split('')
  secondRow.unshift('caps')
  secondRow.push('return')

  let thirdRow = 'zxcvbnm,./'.split('')
  thirdRow.unshift = 'shift'
  thirdRow.push = 'shift'

  let keyMap = {
    f: fRow,
    n: numericRow,
    1: firstRow,
    2: secondRow,
    3: thirdRow,
    b: ['fn', 'control', 'option', 'command', 'space', 'command', 'option']
  }
  let xPos = 15
  let yPos = 15

  ctx.font = '14px Roboto Mono'

  for (let key in keyMap) {
    if (keyMap.hasOwnProperty(key)) {
      console.log(keyMap[key])
    }
  }

  // // Go through all the numeric keys (0-9)
  // numeric.forEach((key) => {
  //   // Push the location for this key to the location map
  //   numericMap[key] = {
  //     x: xPos,
  //     y: yPos,
  //   }
  //   ctx.strokeRect(xPos, yPos, 30, 30)
  //   ctx.fillText(key, xPos + 10, yPos + 20)
  //   xPos += 35
  //   if (xPos >= 625) {
  //     yPos += 35
  //     xPos = 15
  //   }
  // })
  //
  // // Jump to the next row down, resetting X position
  // yPos += 35
  // xPos = 15
  //
  // // Go through all the alpha keys (A-Z)
  // alpha.forEach((key) => {
  //   // Push the location for this key to the location map
  //   alphaMap[key] = {
  //     x: xPos,
  //     y: yPos
  //   }
  //   ctx.strokeRect(xPos, yPos, 30, 30)
  //   ctx.fillText(key, xPos + 10, yPos + 20)
  //   xPos += 35
  //   if (xPos >= 625) {
  //     yPos += 35
  //     xPos = 15
  //   }
  //   if (yPos >= 275) {
  //     return
  //   }
  // })
  // Create keyboard bounding box
  ctx.strokeRect(5, 5, 645, 250)
}

function renderKeyPress(e, state) {
  console.log(e)
  let canvas = document.getElementById('kbLayout')
  let ctx = canvas.getContext('2d')

  let map = null
  if (e.key in alphaMap) {
    map = alphaMap
  } else if (e.key in numericMap) {
    map = numericMap
  }

  if (map[e.key] != undefined) {
    let xPos = map[e.key].x
    let yPos = map[e.key].y
    ctx.clearRect(xPos + 1, yPos + 1, 28, 28)
    if (state == 'down') {
      ctx.fillStyle = 'rgba(63, 127, 191, 0.8)'
      ctx.fillRect(xPos + 1, yPos + 1, 28, 28)
    } else if (state == "up") {
      ctx.fillStyle = 'rgba(63, 191, 63, 0.8)'
      ctx.fillRect(xPos + 1, yPos + 1, 28, 28)
    }

    ctx.fillStyle = 'black'
    ctx.fillText(e.key, xPos + 10, yPos + 20)
  }
}
