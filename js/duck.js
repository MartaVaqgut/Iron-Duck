//Pintar el pato

function Duck(newGame) {
  this.newGame = newGame;
  this.ctx= newGame.ctx;
  this.x= 100;
  this.y= 100;
  this.width=100;
  this.height=100;
  this.vx=3;
  this.vy=7;
  this.radius=100;
  this.img=new Image();
  this.img.src = "./imagenes/patito.png";
}

//pinta el pato
Duck.prototype.draw=function () {
  // this.ctx.fillStyle = "blue";
  // this.ctx.fillRect (0, 0, this.newGame.Width, this.newGame.height);
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

//mueve al pato
Duck.prototype.move=function(){
  this.x += this.vx;
  this.y += this.vy;
  if (this.y >= canvas.height - this.radius|| this.y <= 0) {
    this.vy *= -1;
    this.vx += Math.floor(Math.random()* (3 - (-1))+(-1));
  }
  if (this.x >= canvas.width - this.radius || this.x <= 0) {
    this.vx *= -1;
    this.vy += Math.floor(Math.random()* (3 - (-1))+(-1));
  }
}

