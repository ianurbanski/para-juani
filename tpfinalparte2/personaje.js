class personaje {
  constructor(posX, posY, img) {
    this.posX = posX;
    this.posY = posY;
    this.img = img;
    this.miColor = color(255, 0, 0);
    this.vida = 1;
    this.bala = new bala();
    this.juegoTerminado = false; //juego terminado verificacion
  }

  dibujar() {
    image(this.img, this.posX - 10, this.posY - 50, 50, 70);
  }

  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzq();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDer();
    } else if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  moverDer() {
    this.posX += 15; //movimiento del personaje
  }

  moverIzq() {
    this.posX -= 15; 
  }

  moverArriba() {
    this.posY -= 80; 
  }

  moverAbajo() {
    this.posY += 80; //
  }

  colisionConBala(balas) { //colision de balas
    for (let i = 0; i < balas.length; i++) {
      if (dist(this.posX, this.posY, balas[i].posX, balas[i].posY) < 25) {
        this.juegoTerminado = true; // El juego se termina si colide con una bala
      }
    }
  }
}
