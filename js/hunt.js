//pintar el puntero
function Hunt (game, player){
    this.game=game;
    this.x= 300 + 400 * player;
    this.y= 300;
    this.counter = 0;
    this.speedX= 0;
    this.speedY= 0;
    this.height = 80;
    this.width=80;
    this.img=new Image(); 
    this.img.src = "./imagenes/hunt"+player+".png";
  
};

//limitar los hunters al canvas
Hunt.prototype.draw=function () {
  this.x+=this.speedX;
  this.y+=this.speedY;
  if (this.x<0){
    this.x=0;
  }else if (this.y<0){
    this.y=0;
  }else if (this.x + this.width >= this.game.canvas.width){
    this.x = this.game.canvas.width - this.width;
  }else if (this.y + this.height >= this.game.canvas.height){
    this.y = this.game.canvas.height - this.height;
  }
  this.game.ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
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

//parar los hunters para que no se muevan indefinido  
  Hunt.prototype.stopMove = function() {
    this.speedX = 0;
    this.speedY = 0;
  }

  // disparo del pato === colisiones
  Hunt.prototype.shoot = function(duck,n){
    if (this.x + this.width >= duck.x && duck.x + duck.width >= this.x && this.y + this.height >= duck.y && duck.y + duck.height >= this.y){
        duck.x=20;
        duck.y=20;
        duck.vx=3;
        duck.vy=7;

  //countador del pago
        var counterInput = document.querySelector(".counter"+ n)
        this.counter++;
        counterInput.value = this.counter;

  // audio cuando disparas al pato
        var audio = new Audio("./audio/quacking.mp3"); 
        audio.play();

  //alert game over
        if (this.counter >= 10){
          alert("GAME OVER");
        document.location.reload();
        }
      }

  }




