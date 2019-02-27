// movimiento del pato

function duck (width, height, color, x, y) {
    this.gamearea = gamearea;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.speed = 1;
    this.x = x;
    this.y = y; 
    this.update = function() {
      ctx = myGameArea.context;
      ctx.save();
      ctx.translate(this.x, this.y); 
      ctx.rotate(this.angle);
      ctx.fillStyle = color;
      ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height); 
      ctx.restore(); 
    }
    this.newPos = function() {
      this.x += this.speed * Math.sin(this.angle);
      this.y -= this.speed * Math.cos(this.angle);
    }
  }