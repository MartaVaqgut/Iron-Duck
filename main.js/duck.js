// movimiento del pato

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

function Duck (ctx,canvas) {
  this.ctx=ctx;
  this.canvas=canvas;
  this.x= 100;
  this.y= 100;
  this.speedX= 0;
  this.speedY= 0;
  this.img=new Image();
  this.img.src = "./imagenes/patito.png";
};

Duck.prototype.draw=function () {
  this.img.onload = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 25, 20);
  }.bind(this)
}

Duck.prototype.update=function() {
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  
  //this.draw();
  this.x += this.speedX;
  this.y += this.speedY;

  if (this.y + this.speedY > this.canvas.height || this.y + this.speedY < 0) {
    this.speedY *= -1;
  }

  if (this.x + this.speedX > this.canvas.width || this.x + this.speedX < 0) {
    this.speedX *= -1;
  }
}

