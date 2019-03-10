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
  this.x+=this.speedX;
  this.y+=this.speedY;
  this.game.ctx.drawImage(this.img, this.x, this.y, 80, 80);
}

//mover los punteros
Hunt.prototype.moveLeft =  function(){
  //this.x -= 5;
  this.speedX =-5;
}
Hunt.prototype.moveRight =  function(){
  //this.x -= -5;
  this.speedX = 5;
}
Hunt.prototype.moveup =  function(){
  //this.y -= 5;
  this.speedY =- 5;
}
Hunt.prototype.movedown =  function(){
  //this.y -= -5;
  this.speedY = 5;
}


  
  Hunt.prototype.stopMove = function() {
    this.speedX = 0;
    this.speedY = 0;
  }

  
