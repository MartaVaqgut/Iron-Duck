
function Background(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = './imagenes/back.png';  
    this.x = 0;
    this.y = 0;
  }
  
//pintar el background
Background.prototype.draw = function() {
    this.bgWidth = this.game.canvas.width;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.bgWidth , this.game.canvas.height);
};
  


