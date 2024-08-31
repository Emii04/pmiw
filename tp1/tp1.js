//Link de youtube: https://www.youtube.com/watch?v=c-AOmqjPGvs
//Giuliano Emiliano
//Comisión 2
//119043/4



  let img
  let x
  let y
  let tam

  function preload() {
  img = loadImage('data/photo.jpg')
}

function setup() {
  createCanvas(800, 400)
    x = 500
    y = 95
    tam = 200
}

function Cuadrado(Azul, px, py, ptam) {
  noStroke()
    fill(Azul)
    rect(px, py, ptam, ptam)
}

function AgrandarCuadradoAzul() {
  tam = map(mouseY, 0, height, 200, 230)
    x = map(mouseY, 0, height, 500, 485)
    y = map(mouseY, 0, height, 95, 80)
}

function FondoDegradeAzul() {
  for (let i = 0; i < width; i++) {
    stroke(0, 0, i - 40)
      line(600 + i, 5, 600 + i, height - 5)
      line(600 - i, 5, 600 - i, height - 5)
      if (ColorMitad(400, 200)) {
      stroke(i - 40, 0, 0)
        line(600 + i, 5, 600 + i, height - 5)
        line(600 - i, 5, 600 - i, height - 5)
    } else if (ColorOtraMitad(400, 400)) {
      stroke(0, i - 40, 0)
        line(600 + i, 5, 600 + i, height - 5)
        line(600 - i, 5, 600 - i, height - 5)
    }
  }
}

function LineasYColor(cx, cy) {
  for (let i = 7; i < 400; i += 11) {
    strokeWeight(5.5)
      stroke(255)
      line(i, i, 800, i)
      if (mouseIsPressed) {
      for (let x = 7; x < 800; x += 50) {
        strokeWeight(5.5)
          stroke(cx, 0, cy)
          line(x, x + mouseY, 800, x - mouseY)
      }
    }
  }
}

function ColorCuadrado(xx, yy) {
  if (key === 'c') {
    Cuadrado(color(xx, 0, yy), x, y, tam)
  }
}

function draw() {
  background(0, 0, 255)

    // Lineas detrás con degradado
    FondoDegradeAzul()

    // Cuadrado azul
    Cuadrado(color(0, 0, 255), 500, 95, 200)
    AgrandarCuadradoAzul()

    // Colores del cuadrado
    ColorCuadrado(map(mouseX, 0, width, 0, 255), map(mouseY, 0, width, 0, 255))

    // Lineas coloridas
    LineasYColor(map(mouseX, 0, width, 0, 255), map(mouseY, 0, width, 0, 255))

    // Imagen a la izquierda
    image(img, 0, 0)
}
