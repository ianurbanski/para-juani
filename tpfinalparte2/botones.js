class botones{
  constructor(){
    this.posX = posX;
    this.posY = posY;
    this.boton = boton('instrucciones');
    this.boton1 = boton1('jugar');
    this.boton2 = boton2('salir');
    this.boton3 = boton3('volver a jugar')
    this.boton4 = boton4('creditos')  }
  
  dibujar(){
   boton();
   boton1();
   boton2();
   boton3();
  }
  
  boton(){
    text('instrucciones');
    rect(450,350,50,30);   
  }
  
  boton1(){
    push();  
    rectMode(CENTER);
    text('jugar');
    rect(320,240,50,30); 
    pop();
  }
  
  boton2(){
    if(instancia === "instrcciones"){
      text('salir');
      rect(450,350,50,30);
    } if (instancia === "creditos" ){ 
      text('salir');
      rect(450,350,50,30);
    }
  }
  
  boton3(){
    if(instancia === "perdiste"){
        push();  
          rectMode(CENTER);
          text('jugar');
          rect(320,240,50,30); 
        pop();
    }
  }
  
  
}
