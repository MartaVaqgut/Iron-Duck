
//carga el canvas
function Game(canvas){
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = 1024;
  this.canvas.height = 768;
  this.reset();

}

Game.prototype.clear = function (){
  this.ctx.clearRect (0, 0, this.canvas.width, this.canvas.height);
};
//empieza el canvas
Game.prototype.start = function (){
  this.clear();
  this.move();
  this.draw();
  
}
//carga los jugadores y pato
Game.prototype.reset = function (){
  this.duck = new Duck(this);
  this.hunt1 = new Hunt(this,0);
  this.hunt2 = new Hunt(this,1);
  this.background = new Background(this);
  
}
 
//
Game.prototype.draw = function (){
  this.duck.draw();
  this.background.draw();
  this.hunt1.draw();
  this.hunt2.draw();
}

Game.prototype.move = function(){
  this.duck.move();
}


