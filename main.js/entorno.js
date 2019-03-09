

var x=200, y=400;//coordenadas iniciales de la imagen



//cuando presiona una tecla
function whichButton(event){

if(event.keyCode=="39"){//si la tecla presionada es direccional derecho

x=x+5;//mueve la nave 5 pixeles a la derecha
lienzo();

}

if(event.keyCode=="37"){//si la tecla presionada es direccional izquierdo

x=x-5;//mueve la nave 5 pixeles a la izquierda
lienzo();

}

if(event.keyCode=="38"){//si la tecla presionada es direccional arriba

y=y-5;//sube la nave
lienzo();

}

if(event.keyCode=="40"){// si la tecla presionada es direccional abajo

y=y+5;//baja el disparo
lienzo();

}

}

