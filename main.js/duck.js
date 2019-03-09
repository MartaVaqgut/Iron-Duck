// movimiento del pato

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var duck = {
  x: 100,
  y: 100,
  speedX: 0,
  speedY: 0,
  img: new Image(),
  draw: function() {
    this.img.src = "./imagenes/patito.png";
    ctx.drawImage(this.img, this.x, this.y, 25, 20);
  }
};

function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  duck.draw();
  duck.x += duck.speedX;
  duck.y += duck.speedY;

  if (duck.y + duck.speedY > canvas.height || duck.y + duck.speedY < 0) {
    duck.speedY *= -1;
  }

  if (duck.x + duck.speedX > canvas.width || duck.x + duck.speedX < 0) {
    duck.speedX *= -1;
  }
}

