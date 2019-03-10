//pintar el puntero
function Hunt (game, player){
    this.game=game;
    this.x= 300 + 400 * player;
    this.y= 300;
    this.speedX= 0;
    this.speedY= 0;
    this.img=new Image(); 
    this.img.src = "./imagenes/hunt"+player+".png";
};

Hunt.prototype.draw=function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, 80, 80);
}

Hunt.prototype.move=function(){
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






Hunt.prototype.onkeydown = function(e) {
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
  
  Hunt.prototype.stopMove = function() {
    player.speedX = 0;
    player.speedY = 0;
  }

  Hunt.prototype.onkeyup = function(e) {
    stopMove();
  }
