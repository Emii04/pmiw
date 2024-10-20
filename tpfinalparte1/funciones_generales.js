function pantallax(x){
  image(fotos [x], 0, 0, 640, 480); 
}


function movimiento(){
  
   if (keyIsDown(LEFT_ARROW)) {
    x -= 5; // Mueve a la izquierda
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5; // Mueve a la derecha
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5; // Mueve hacia arriba
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5; // Mueve hacia abajo
  }
}
function limites(){
  // Limita el movimiento dentro de la pantalla
  x = constrain(x, 0, width - size);
  y = constrain(y, 0, height - size);
}


//__________________________________________________

function boton(cX,cY,cW,cH,r,xr,xg,xb,v,texto){
 
  stroke(v);
  fill(xr,xg,xb)
  rect(cX,cY,cW,cH,r);
  txt(texto,280,332,25);
}

function txt(t,x,y,s){
  
   textSize(s);
   text(t, x ,y);
  
}

function dentro(u){
  if (mouseX > n && mouseY > m && mouseX < 415 && mouseY < 350) {
     boton(width / 3, height-180, 200, 50, 5, 150, 120, 50, 1000, "jugar");//cambia color
       if (mouseIsPressed ) { 
         if (mouseX > n && mouseY > m && mouseX < 415 && mouseY < 350) {
  
            pantalla = u;            
            }
           }
          }
  
}
