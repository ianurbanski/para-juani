class pantalla{
 constructor(){
   this.pantalla = instrucciones; 
   this.pantalla = creditos;
   this.pantalla = juego;
   this.pantalla = perdiste;
   this.pantalla = ganaste;
   this.juego = false;
   this.creditos = false;
   this.instrucciones = false;
   this.perdiste = false;
   this.ganaste = false;
 }
 
 dibujar(){
    
 }
 
 instrucciones(){
   
  image(intro, 0, 0, 640, 480);
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255, 0, 0);
  text("Mortal Kombat", width / 2, 130);
  textSize(16);
  fill(255);
  text("Objetivo: Esquivar las bolas de fuego enemigas y salvar a Kung Lao.", width / 2, 200);
  text("Controles: Usa las flechas para moverte y", width / 2, 280);
  text("la barra espaciadora para navegar por las pantallas.", width / 2, 300);

 }
 
 creditos(){
   function creditos(){
    image(intro, 0, 0, 640, 480);
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255, 0, 0);
    text("¡Gracias por jugar!", width / 2, 130);
    textSize(16);
    fill(255);
    text("Videojuego creado por Ian Urbanski y", width / 2, 280);
    text("Juan Ignacio Ventimiglia", width / 2, 300);
  }
 }
 
 juego(){
   this.juego.dibujar();
 }
 
 perdiste(){
   
 }
 
 ganaste(){
   
 }
  
  
}
