
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

function hunt (ctx,canvas) {
    this.ctx=ctx;
    this.canvas=canvas;
    this.x= 60;
    this.y= 60;
    this.speedX= 0;
    this.speedY= 0;
    this.img=new Image();
    this.img.src = "./imagenes/hunt.png";
};

hunt.prototype.move=function(){
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


// hunt.prototype.draw=function () {
//   this.img.onload = function() {
//     this.ctx.drawImage(this.img, this.x, this.y, 25, 20);
//   }.bind(this)
// }

// Function updateTwo(){
//   hunt.draw();
//   if (hunt.y + hunt.speedY > canvas.height || hunt.y + hunt.speedY < 0) {
//     duck.speedY *= -1;
//   }
 
//   if (hunt.x + hunt.speedX > canvas.width || hunt.x + hunt.speedX < 0) {
//     hunt.speedX *= -1;
//   }
// }


// function moveUp() {
//   player.speedY -= 1;
// }

// function moveDown() {
//   player.speedY += 1;
// }

// function moveLeft() {
//   player.speedX -= 1;
// }

// function moveRight() {
//   player.speedX += 1;
// }

// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     case 38:
//       moveUp();
//       break;
//     case 40:
//       moveDown();
//       break;
//     case 37:
//       moveLeft();
//       break;
//     case 39:
//       moveRight();
//       break;
//   }
// }

// document.onkeyup = function(e) {
//     stopMove();
//   }
  
//   function stopMove() {
//       player.speedX = 0;
//       player.speedY = 0;
//   }