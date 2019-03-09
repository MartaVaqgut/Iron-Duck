function startGame() {
    // Obtine velocidad inicial para comenzar a jugar
    var inputSpeed = document.querySelector('.speed-input').value

    // Aplica velocidad al pato y lo inicia
    duck.speedX = parseInt(inputSpeed)
    duck.speedY = parseInt(inputSpeed/2)
    duck.draw();

    // Resfresca el movimiento del pato
    setInterval(update, 20);

    // Pinta los punteros
}

//llamada al hunt
function updateGameArea() {
    myGameArea.clear();
    player.update();
}



