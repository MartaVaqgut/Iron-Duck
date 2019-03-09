

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

Game.prototype.start = function (){
  this.clear();
  this.move();
  this.draw();
}

Game.prototype.reset = function (){
  this.duck = new Duck(this);
  // this.hunt1 = new Hunt(this);
  // this.hunt2 = new Hunt(this)
  // this.background = new background(this)
}
 
Game.prototype.draw = function (){
  // this.background.draw();
  this.duck.draw();
  // this.hunt1.draw();
  // this.hunt2.draw();
}

Game.prototype.move = function(){
  this.duck.move();
}


function startGame() {
  // Obtine velocidad inicial para comenzar a jugar
  var inputSpeed = document.querySelector('.speed-input').value
  var game = new Game("canvas");
  var duck = new Duck(game);

  // array = new Array[1000]
  // // Aplica velocidad al pato y lo inicia
  // arrayforech.
  //   duck.speedX = parseInt(inputSpeed)
  //   duck.speedY = parseInt(inputSpeed/2)
  //   duck.move();
  //   duck.draw();
}