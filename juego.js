class juego {
  constructor() {
    this.crearRecompensa();
    this.crearEnemigos();
    this.crearPlataforma();
    this.crearPersonaje();    
    this.pantallaActual = "inicio";
    
     this.botonx = width/2-48 ;
    this.botony= 400 ;
    this.botonan= 100; 
    this.botonal= 50;
    
    this.botonjugar = new boton (this.botonx,this.botony,this.botonan,this.botonal,"jugar");
    this.botonreiniciar = new boton (this.botonx,this.botony,this.botonan,this.botonal,"reiniciar");
    this.botoncomenzar = new boton (this.botonx,height/2,this.botonan,this.botonal,"comenzar");
    this.botoncreditos = new boton (this.botonx,this.botony,this.botonan,this.botonal,"creditos");
    
    
  }
  
  
  
  
  pantallaActual(){
    
    
    if (this.pantallaActual === "inicio"){
     this.pantalla.mostrarPantalla(0);
     this.iniciarMusica();
     this.botoncomenzar.mostrar();
       if(this.botoncomenzar.diapoActual()){
        this.pantallaActual = "instrucciones";
       }
    } else if (this.pantallaActual === "instrucciones"){
     this.pantalla.mostrarPantalla(1);
     this.botonjugar.mostrar();
       if(this.botonjugar.diapoActual()){
        this.pantallaActual = "juego";
       }
    } else if (this.pantallaActual === "juego"){
     this.pantalla.mostrarPantalla(2);
    } else if (this.pantallaActual === "ganar"){
     this.pantalla.mostrarPantalla(3);
     this.botoncreditos.mostrar();
       
    } else if (this.pantallaActual === "perder"){
     this.pantalla.mostrarPantalla(4);
     this.botoncreditos.mostrar();
              
    } else if (this.pantallaActual === "creditos"){
     this.pantalla.mostrarPantalla(5);
     this.botonreiniciar.mostrar();
     this.detenerMusica();
    } 
    
    if (this.pantallaActual === "ganar" || this.pantallaActual === "perder"){
     if (this.botoncreditos.diapoActual()){
      this.reiniciarJuego();
      this.pantallaActual = "creditos"     
     }
    }
  }

  crearPersonaje() {
    this.personaje = new personaje(width/2, 465, pj); // Crear el personaje
  }

  crearEnemigos() {
    this.enemigos = [];
    let tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
    for (let i = 0; i < 6; i++) {
      this.enemigos.push(new enemigo(600, i * 80 + 50, tiempos[i], villano));
    }
  }

  crearPlataforma() {
    this.plataforma = new plataforma();
  }

  crearRecompensa() {
    this.recompensa = new recompensa(348, 60, aliado); // Colocar la recompensa en la posición inicial
  }

  dibujar() {
    if (!this.personaje) {
      console.error("El personaje no está definido.");
      return;
    }

    if (this.personaje.juegoTerminado) {
      this.reiniciarJuego();
    } else if (this.recompensa.agarroRecompensa) {
      this.reiniciarJuego();
      this.ajustarVelocidadBalas(); // ajusta la velocidad de las balas si se llego a la recompensa
    } else {
      for (let enemigo of this.enemigos) {
        enemigo.dibujar();
      }

      this.personaje.dibujar();
      this.plataforma.dibujar();
      this.recompensa.dibujar();

      // Vverificamos si el personaje llego a la meta
      this.recompensa.colisionConRecompensa(this.personaje);

      // vemos si aluna bala choco contra el personaje
      for (let enemigo of this.enemigos) {
        this.personaje.colisionConBala(enemigo.balas);
      }
    }
  }

  reiniciarJuego() {
    // Reiniciar todos los elementos del juego
    this.personaje = new personaje(width / 2, 465, pj); // Restablece posición del personaje
    this.enemigos = [];
    let tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
    for (let i = 0; i < 6; i++) {
      this.enemigos.push(new enemigo(600, i * 80 + 50, tiempos[i], villano));
    }
    this.recompensa = new recompensa(348, 72, aliado); // Restablece la recompensa
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode); // Llamamos al personaje
    for (let enemigo of this.enemigos) {
      enemigo.teclaPresionada(keyCode);
    }
  }

  ajustarVelocidadBalas() {// activala velocidad rapida
    for (let enemigo of this.enemigos) {
      for (let bala of enemigo.balas) {
        bala.setVelocidadRapida(true);
      }
    }
  }
  
  
  iniciarMusica() {
    if (!cancionFondo.isPlaying()) {
      cancionFondo.loop(); 
    }
  }
  detenerMusica() {
    cancionFondo.stop();
  }
}
