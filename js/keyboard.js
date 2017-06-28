window.addEventListener('load', drawKeyboard, false);

function drawKeyboard(ctx) {
  var canvas = document.getElementById('kbLayout');
  var ctx = canvas.getContext('2d');

  var alpha = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  var numeric = '1234567890'.split('');
  var xPos = 15;
  var yPos = 15;

  ctx.font = '16px Raleway';

  numeric.forEach((key) => {
    ctx.strokeRect(xPos, yPos, 30, 30);
    ctx.strokeText(key, xPos + 10, yPos + 20)
    xPos += 35;
    if (xPos >= 625) {
      yPos += 35;
      xPos = 15;
    }
  });

  yPos += 35;
  xPos = 15;
  
  alpha.forEach((key) => {
    ctx.strokeRect(xPos, yPos, 30, 30);
    ctx.strokeText(key, xPos + 10, yPos + 20)
    xPos += 35;
    if (xPos >= 625) {
      yPos += 35;
      xPos = 15;
    }
    if (yPos >= 275) {
      return;
    }
  });
  ctx.strokeRect(5, 5, 645, 250);
}
