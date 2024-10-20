//Link del video a Youtube : 
//TP#Final — Aventura Gráfica Interactiva Web [1]
// Alumnos :  Emiliano Esteban Giuliano, Sofía Martínez Bogado.
// Legajos :  119084/3 | 119083/3

/*
Serie Animada: Gravity Falls
         Sinapsis : Mabel se despierta y no encuentra a Pato,su mascota a su lado 
         así que en este juego tendras que ir visitando habitaciones para encontrarlo
         y obtener el final esperado.
*/

//agregar estados y eventos
//textos


let creditos = [
  "Creado por: Martinez Bogado Sofia",
  "y Giuliano Emiliano.",
  "Serie ambientada en Gravitty Falls.",
  "Música: Terror abundante",
  "Fotos: Google",
  "Agradecimientos a:",
  "  - Carlos Acuña",
  "  - Churri",
  "Fin y gracias por jugar"
];

let j = 550; // Posición inicial de los créditos
let speed = 1; // Velocidad de desplazamiento


let musica; // Musica

let temp;
let temppantalla;

let n,m;

let x, y; // Posición de la imagen
let size = 70; // Tamaño de la imagen
let fotos = []; // Variable para la imagen


let pantalla;

//------------------------------------------------------

function preload() {
  
  // MUSICA
  soundFormats('mp3', 'ogg');
  musica = loadSound('/data/GB1.mp3');

  //IMAGENES
  
  //for (let i=0; i<i; i++) {
  //  fotos[i]=loadImage("data/Designer"+i+".jpg");
  //  fotos[i]=loadImage("data/Designer"+i+".png");
  //}
  
   fotos ['Mabel'] = loadImage('data/Mabel.png');
  fotos ['Mabel2'] = loadImage('data/mabel2.png');
  //fotos ['Mabel3'] = loadImage('data/mabel3.jpg');

  fotos ['imag0'] = loadImage('data/fotodemenu.jpg');
  fotos ['imag1'] = loadImage('data/habM&D.jpg');
  fotos ['imag2'] = loadImage('data/habX1.jpg');
  fotos ['imag3'] = loadImage('data/habX2.jpg');
  fotos ['imag4'] = loadImage('data/atico.jpg');
  fotos ['imag5'] = loadImage('data/habMisteriosa.jpg');
  fotos ['imag6'] = loadImage('data/habSotano.jpg');
  fotos ['imag7'] = loadImage('data/habSotanoD.jpg');
  fotos ['imag8'] = loadImage('data/heladera.jpg');
  fotos ['imag9'] = loadImage('data/afuera.jpg');
  fotos ['imag10'] = loadImage('data/shop.jpg');
  fotos ['imag11'] = loadImage('data/shop2.jpg');
  fotos ['imag12'] = loadImage('data/pasillo.jpg');


  fotos ['flecha1'] = loadImage('data/flecha1.png');
  fotos ['flecha2'] = loadImage('data/flecha2.png');
  fotos ['plano'] = loadImage('data/planos.jpg');
  fotos ['final malo'] = loadImage('data/finalmalo1.jpg');
  fotos ['final bueno'] = loadImage('data/finalbueno.jpg');
  fotos ['final de Bill'] = loadImage('data/estatuadebill.jpg');
}
//Link del video a Youtube : 
//TP#Final — Aventura Gráfica Interactiva Web [1]
// Alumnos :  Emiliano Esteban Giuliano, Sofía Martínez Bogado.
// Legajos :  119084/3 | 119083/3

/*
Serie Animada: Gravity Falls
         Sinapsis : Mabel se despierta y no encuentra a Pato,su mascota a su lado 
         así que en este juego tendras que ir visitando habitaciones para encontrarlo
         y obtener el final esperado.
*/

//agregar estados y eventos
//textos


//------------------------------------------------------
function setup() {
  createCanvas(640, 480);
  
  x = width; // Inicia la posición de el jugador
  y = height / 2;
  
  n = width / 3;//valor que se repite
  m = height-180;
  
  pantalla = 0;
}

function draw() {

  print(temp);
  print(mouseX + "/" + mouseY);
  
  temp = int( millis() / 1000 ); 
  temppantalla = temp ;
  
 //Menu
 
     if ( pantalla === 0 ) {
         menu(); 
         //condición si ¨Mabel¨ está en el cuadrado
         dentro(1);
       } 
           
      //Hab de Mabel y Dipper
      if ( pantalla === 1) {
        pantalla1();
      }
  
      //pasillo donde puedes entrar a x habitacones o bajar por la escalera
      if (pantalla === 2){
        pantalla2();
        if (x + 50 > 500 && x < 600 && y + 50 > 334 && y < 479) {
          pantalla = 6;
        }
      } 
      if ( pantalla === 3) {
        if(keyIsDown(LEFT_ARROW)){
          pantalla = 2;}
      }
      if ( pantalla === 4) {
        if(keyIsDown(LEFT_ARROW)){
          pantalla = 2;}
      }
      if ( pantalla === 5) {
        if(keyIsDown(LEFT_ARROW)){
          pantalla = 2;}
      }
      
      if (pantalla === 6){
      //piso de abajo, apartir de acá se mueve de izquierda a derecha
      pantallax('imag10'); // cambia al shop
        fill(61,39,40);
        rect(0, 330, 640, 165);
        
         image(fotos ['Mabel2'],530,320,110,160);
         image(fotos ['flecha1'],10,335,80,80);
         image(fotos ['flecha2'],460,335,80,80);
         
         if(keyIsDown(RIGHT_ARROW)){
          pantallax('imag8');
          if(pantallax('imag8')){
          
  
         fill(61,39,40);
          rect(0, 330, 640, 165);
          image(fotos ['Mabel2'],530,320,110,160);
          image(fotos ['flecha1'],10,335,80,80);
          image(fotos ['flecha2'],460,335,80,80);
          
         if(keyIsDown(LEFT_ARROW)){
          pantalla = 6;
          if(keyIsDown(RIGHT_ARROW)){
          pantallax('plano');
          if(keyIsDown(RIGHT_ARROW)){
          sotano1();
          }
          }
          }
         }
          }
         
         if(keyIsDown(LEFT_ARROW)){
          pantalla = 7;
          
          pantallax('imag9');//afuera
          fill(61,39,40);
         rect(0, 330, 640, 165);
         image(fotos ['Mabel2'],530,320,110,160);
         image(fotos ['flecha1'],10,335,80,80);
         image(fotos ['flecha2'],460,335,80,80);
         
         }else if(keyIsDown(RIGHT_ARROW)){
          pantalla = 6;
          }
         
      }

        
      //if (pantalla === 7 && keyIsDown(LEFT_ARROW)){

      //    pantalla8();
      //   if(temp > 50){
      //   creditosfinales();
      //   }
          
      //    if(keyIsPressed(RIGHT_ARROW)){
      //    pantalla = 6;
      //    }
      // }
        
      

}//[fin del codigo]

function mousePressed() {  
  // MUSICA
  if (musica.isPlaying()) {
    musica.loop();
  } else {
    musica.play();
  }
}
