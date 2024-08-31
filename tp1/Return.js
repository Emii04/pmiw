//RETURN


function ColorMitad(posX, posY) {
  return mouseX > posX && mouseY > posY
}

function ColorOtraMitad(posH, posM) {
  return mouseX > posH && mouseY < posM
}

function keyPressed() {
  if (key === ' ') {
    reinicio()
  }
}

function reinicio() {
  mouseX = 0
  mouseY = 0
}
