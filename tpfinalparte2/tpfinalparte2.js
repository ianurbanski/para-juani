// link: https://youtu.be/lfnTHDRwEfQ
// trabajo hecho en conjunto con juan ignacion ventimiglia

let objJuego;
let instancia = "instrucciones";
let fondo, pj, villano, aliado, proyectil, intro;
let cancionFondo;

function preload(){
 fondo = loadImage ('data/0.png');
 pj = loadImage('data/1.png');
 villano = loadImage ('data/2.png');
 aliado = loadImage('data/3.png');
 proyectil = loadImage ('data/4.png');
 intro = loadImage ('data/5.png');
 
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
