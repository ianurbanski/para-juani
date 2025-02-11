
//sonido

//let sonidoFondo;

// Variables para definir la escena a mostrar
let escena = 0;

// Arreglo con los nombres de las imagenes
let backgroundNames = [
  'data/PANTALLA_0.png',
  'data/PANTALLA_1.jpg',
  'data/PANTALLA_2.png',
  'data/PANTALLA_3.png',
]

// Arreglo para las imágenes cargadas en memoria
let backgroundImages = [];

// imagenes
//-----------------------------------------------
let spriteAmigoName = 'data/spriteAmigo.png';
let spriteAmigo;

let spriteHeroeName = 'data/spriteHeroe.png';
let spriteHeroe;

let spriteVillanoName = 'data/spriteVillano.png';
let spriteVillano;

let fuegoName = 'data/fuego.png';
let fuego;
//-----------------------------------------------

//let textos = [];

//objeto de clase
let principal;


function preload(){
 //precargamos los textos
 
 //precargamos los sonidos
 
//sonidoFondo = loadSound('data/sonidoFondo.mp3');



 // Precargamos las imágenes de fondo, sprites, etc
  // Hago un ciclo for por la cantidad de elementos de backgroundNames
  for (let i = 0; i < backgroundNames.length; i++) {
    backgroundImages[i] = loadImage(backgroundNames[i]); 
  }
  
  spriteAmigo = loadImage(spriteAmigoName);
  spriteHeroe = loadImage(spriteHeroeName);
  spriteVillano = loadImage(spriteVillano);
  fuego = loadImage(fuegoName);
  }


function setup() {
  createCanvas (640,480);
  principal = new Principal();
  
}

function draw() {
  background(200,200,120);
  principal.mostrarPantalla();
}

function mouseClicked() {
  principal.chequearClicks(); 
 
}
