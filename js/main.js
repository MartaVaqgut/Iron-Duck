window.onload = function() {
    var game = new Game("canvas");

    //eventos de las teclas
    document.onkeydown = function(event) {
        switch (event.keyCode){
            //jugador  puntero azul
            case 65: game.hunt2.moveLeft(); break;
            case 68: game.hunt2.moveRight(); break;
            case 87: game.hunt2.moveup(); break; 
            case 83: game.hunt2.movedown(); break;
            case 82: game.hunt2.shoot(game.duck); break;
             //jugador 1 puntero rojo
            case 37: game.hunt1.moveLeft(); break;
            case 39: game.hunt1.moveRight(); break;
            case 38: game.hunt1.moveup(); break; 
            case 40: game.hunt1.movedown(); break;
            case 16: game.hunt1.shoot(game.duck); break;
        }
    }
    //para los eventos de las teclas
    document.onkeyup = function(event){
        switch (event.keyCode){
            case 37 : game.hunt1.stopMove(); break;
            case 39 : game.hunt1.stopMove(); break;
            case 38 : game.hunt1.stopMove(); break;
            case 40 : game.hunt1.stopMove(); break;
            case 65 : game.hunt2.stopMove(); break;
            case 68 : game.hunt2.stopMove(); break;
            case 87 : game.hunt2.stopMove(); break;
            case 83 : game.hunt2.stopMove(); break;
        }    
    }
    
    //cada cuanto pinta el pato
    var interval = setInterval(game.start.bind(game), 1000/60);



};

