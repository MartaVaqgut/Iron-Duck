var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); 
function startGame() {
    // Obtine velocidad inicial para comenzar a jugar
    var inputSpeed = document.querySelector('.speed-input').value
    var duck = new Duck(ctx, canvas);

    // Aplica velocidad al pato y lo inicia
    duck.speedX = parseInt(inputSpeed)
    duck.speedY = parseInt(inputSpeed/2)
    duck.update();
    duck.draw();
   

    // Resfresca el movimiento del pato
    function game() {
        Pause()
        counter += 1;
        if(counter % 10 === 0)duckArray.push(new duck());
        duck.moveduck()
        duck.draw()
        duckArray.forEach(function(duck) {
          duck.draw();
          duck.move();
          duck.collision(player);
        })
        }
      //var interval = setInterval(duck.update.bind(this), 20);

    // Pinta los punteros
}

//llamada al hunt



