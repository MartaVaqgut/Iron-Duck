window.onload = function() {
    var game = new Game("canvas");
    var interval = setInterval(game.start.bind(game), 1000/60);
}

