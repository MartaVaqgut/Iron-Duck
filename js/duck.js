// movimiento del pato


function Duck(newGame) {
  this.newGame = newGame;
  this.ctx= newGame.ctx;
  this.x= 100;
  this.y= 100;
  this.speedX= 1;
  this.speedY= 1;
  this.img=new Image();
  this.img.src = "./imagenes/patito.png";
}


Duck.prototype.draw=function () {
  this.img.onload = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }.bind(this)
}
Duck.prototype.move=function(){
  this.x += this.speedX;
  this.y += this.speedY;

  if (this.y + this.speedY > this.newGame.canvas.height || this.y + this.speedY < 0) {
    this.speedY *= -1;
  }

  if (this.x + this.speedX > this.newGame.canvas.width || this.x + this.speedX < 0) {
    this.speedX *= -1;
  }
  this.draw();
}



// Duck.prototype.update=function() {
//   
  

