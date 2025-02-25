let juego, pj, villano, aliado, proyectil;
let fondoArreglo = [];

function preload() {
 pj = loadImage('data/personaje.png');
 villano = loadImage('data/enemigo.png');
 aliado = loadImage('data/aliado.png');
 proyectil = loadImage('data/proyectil.png');
 
 for (let i = 0; i <= 5; i++) {
    fondoArreglo[i] = loadImage('data/pantalla' + i + '.png');
 }

}
 
function setup() {
 createCanvas(640, 480);
 
 juego = new Principal();
}

function draw() {
  background(220);
  
  juego.inicio();
}

function mousePressed() {
  for (let boton of juego.botones) {
    if (boton.posicionMouse()) {
      boton.click();
    }
  }
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}
