
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var hunt = {
  x: 60,
  y: 60,
  speedX: 0,
  speedY: 0,
  img: new Image(),
  draw: function() {
    this.img.src = "./imagenes/hunt.png";
    ctx.drawImage(this.img, this.x+speedX, this.y, 25, 20);
  }
};




function moveUp() {
    player.speedY -= 1;
}

function moveDown() {
    player.speedY += 1;
}

function moveLeft() {
    player.speedX -= 1;
}

function moveRight() {
    player.speedX += 1;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
}

document.onkeyup = function(e) {
    stopMove();
  }
  
  function stopMove() {
      player.speedX = 0;
      player.speedY = 0;
  }