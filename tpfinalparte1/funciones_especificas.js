function menu(){
  
   image(fotos ['imag0'],0,0);
   boton(width / 3, height-180, 200 , 50 ,5,120,80,5,1,"jugar");
}

function mabel (){
  
 movimiento();
         limites();
          image(fotos ['Mabel'], x, y, size, size); 
}

function pantalla1(){
 
   pantallax('imag1');
   push();
              mabel ();
                //rect(265, 455, 100 , 30);
                boton(265, 455, 100 , 30, 5, 150, 120, 50, 1000);
                if (x + 50 > 265 && x < 365 && y + 50 > 456 && y < 480) {
              pantalla=2; // Cambia a la segunda pantalla             
            }
   pop();
}

function pantalla2(){
  pantallax('imag12');
  
       push();
       mabel();
   
      fill(150,120,50);   
      rect(100, 147, 100 , 30);//habx1
      rect(500, 147, 100 , 30);//habx2
      rect(100, 334, 100 , 30);//habMisteriosa
      rect(500, 334, 100 , 150);//escaleras
      
       pop();
       
      pantalla3();
      pantalla4();
      pantalla5();
      }
  

function pantalla3(){
  if (x + 50 > 100 && x < 200 && y + 50 > 147 && y < 171) {
      
         pantallax('imag3'); // Cambia la pantalla habx2          
         pantalla = 3;

       
         fill(61,39,40);
         rect(0, 330, 640, 165);
         image(fotos ['Mabel2'],530,320,110,160);
         image(fotos ['flecha1'],10,335,80,80);
         
         
         fill(255);
         textSize(15);
         text("Esta habitación es la habitación de el tio Stan, \n normalmente guarda sus pertenencias  no veo porque\n tendria aqui a mi cerdito",150, 400);
         
        }
}
function pantalla4(){
  if (x + 50 > 500 && x < 600 && y + 50 > 147 && y < 171) {
         pantalla = 4;
         pantallax('imag4'); // Cambia la pantalla habAtico

         fill(61,39,40);
         rect(0, 330, 640, 165);
         image(fotos ['Mabel2'],530,320,110,160);
         image(fotos ['flecha1'],10,335,80,80);
         
         fill(255);
         textSize(15);
         text("Este es el atico, \n y no veo por aqui a mi cerdito",150, 400);
       }
  
}
function pantalla5(){
  if (x + 50 > 100 && x < 200 && y + 50 > 334 && y < 479) {
         pantalla = 5;
         pantallax('imag2'); // Cambia la pantalla habx
         //mabel();
         fill(61,39,40);
         rect(0, 330, 640, 165);
         image(fotos ['Mabel2'],530,320,110,160);
         image(fotos ['flecha1'],10,335,80,80); 
         
         fill(255);
         textSize(15);
         text("Que miedo lo que hay aqui, \n mejor me voy rapido, no veo a cerdito",150, 400);
       }
}

//hay pantalla 6

function pantalla7(){
      
      fill(61,39,40);
        rect(0, 330, 640, 165);
         image(fotos ['Mabel2'],530,320,110,160);
         image(fotos ['flecha1'],10,335,80,80);
         image(fotos ['flecha2'],460,335,80,80);
         

}
function pantalla8(){
  pantallax('final malo');
  
  
}
function pantalla9(){
  pantallax('imag8');//heladera
  
  fill(61,39,40);
        rect(0, 330, 640, 165);
         image(fotos ['Mabel2'],530,320,110,160);
         image(fotos ['flecha1'],10,335,80,80);
         image(fotos ['flecha2'],460,335,80,80);
         
         
  
}
function pantalla10(){
  
  
}
function pantalla11(){
  
  
}
function pantalla12(){
  
  
}
