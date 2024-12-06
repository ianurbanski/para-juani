// link: https://youtu.be/lfnTHDRwEfQ
// trabajo hecho en conjunto con juan ignacion ventimiglia

let objJuego;
let instancia = "instrucciones";
let fondo, pj, villano, aliado, proyectil, intro;
let cancionFondo;

function preload(){
 pj = loadImage('data/heroe0.png');
 villano = loadImage ('data/villano3.png');
 aliado = loadImage('data/amigo1.png');
 proyectil = loadImage ('data/fuego0.png');
 
 cancionFondo = loadSound('data/sonido.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new juego();
  
  cancionFondo.setVolume(0.05);
}

function draw() {
  if (instancia === "instrucciones") {
     instrucciones();
   } else if (instancia === "juego") {
     image(fondo, 0, 0, 640, 480);
     objJuego.dibujar();
   } else if (instancia === "créditos"){
     creditos();
   }
  
}





function keyPressed() {
  if (keyCode === 32) {
    if (instancia === "instrucciones") {
      instancia = "juego";
      cancionFondo.loop();
    } else if (instancia === "juego") {
      instancia = "créditos";
    } else if (instancia === "créditos"){
      instancia = "instrucciones"
      cancionFondo.stop();
      cancionFondo.play();
    }
  }
  

  
  if (instancia === "juego"){
  objJuego.teclaPresionada(keyCode);
 }
}
