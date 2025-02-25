


class Personaje{
 constructor(posX, posY, img){
 this.posX = posX;
 this.posY = 420;
 this.img = img;
 this.vida = 1;
 this.bala = new Bala();
 this.juegoTerminado = false;

 }

 dibujar(){
  image(this.img , this.posX -10,this.posY-10, 50, 70);
 }

//-------MOVIMIENTO-------//

movimiento(keyCode) {
  switch (keyCode) {
    case LEFT_ARROW:
      this.moverIzq();
      break;
    case RIGHT_ARROW:
      this.moverDer();
      break;
    case UP_ARROW:
      this.moverArriba();
      break;
    case DOWN_ARROW:
      this.moverAbajo();
      break;
  }
}

 
moverDer(){
    
   if (this.posX + 15 >= 600) {
     this.posX = 600;
   } else { 
     this.posX += 15;
   }  
}


 moverIzq(){
   if (this.posX - 15 <= 10){
     this.posX = 10;
   } else {
     this.posX -= 15
   }
 }

 moverArriba(){
   if (this.posY - 80 <= 10) {
     this.posY = 10;
   } else {
     this.posY -= 80;
   }
}

 moverAbajo(){
   
   if (this.posY + 80 >= 420) {
     this.posY = 420;
   } else {
     this.posY += 80;
   }
}
//------------------------//


 colisionConBala(balas){
  for (let i = 0; i < balas.length; i++) {
    let centroX = this.posX + 25; // Mitad del ancho del personaje
    let centroY = this.posY + 35; // Mitad de la altura del personaje
    
    let distancia = dist(centroX, centroY, balas[i].posX, balas[i].posY);
    
    if (distancia < 35) { // Aumentamos el rango de colisión
      this.juegoTerminado = true;
      juego.estadoActual = "derrota";
      juego.reiniciarJuego();
    }
  }
} 
}
