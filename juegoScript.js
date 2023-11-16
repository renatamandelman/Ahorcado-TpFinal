var palabras = [
  // Nivel 0 - Fácil
  [
    "gato",
    "perro",
    "casa",
    "flor",
    "sol",
    "rojo",
    "agua",
    "fruta",
    "mesa",
    "lago",
  ],
  // Nivel 1 - Medio
  [
    "bicicleta",
    "computadora",
    "elefante",
    "frutas",
    "naturaleza",
    "familia",
    "oficina",
    "musica",
    "viaje",
    "verano",
  ],
  // Nivel 2 - Difícil
  [
    "desarrollo",
    "experiencia",
    "matematicas",
    "programacion",
    "universidad",
    "extraordinario",
    "complicado",
    "tecnologia",
    "innovacion",
    "independencia",
  ],
];

var letrasUsadas = [];
var random;
var numero;
var longitud;
var palabraOculta = [];
var input;
var score = 0;
var contadorErrores = 0;
var palabraElegida;
var arrayPalabra = [];
var contadorError = 0;



document.getElementById("bajo").onclick = function () {
  contadorError = 0;
  imagen();
  getRandom(0);
  mostrarRayas();
  verLetra(0);
}

document.getElementById("medio").onclick = function () {
  contadorError = 0;
  imagen();
  getRandom(1);
  mostrarRayas();
  verLetra(1);
}

document.getElementById("alto").onclick = function () {
  contadorError = 0;
  imagen();
  getRandom(2);
  mostrarRayas();
  verLetra(2);
}

function mostrarRayas() {
  document.getElementById("rayita").innerHTML = palabraOculta.join(" ");
}

function getRandom(nivel) {
  palabraOculta = "";
  random = Math.floor(Math.random() * palabras[nivel].length);
  longitud = palabras[nivel][random].length;
  palabraOculta = Array(longitud).fill("_");
  letrasUsadas = [];

  console.log(letrasUsadas);
  return random;
}

function verLetra(nivel) {
  document.getElementById("enviar").onclick = function () {
    letra = document.getElementById("inputLetra").value;
    document.getElementById("inputLetra").value = "";
    palabraElegida = palabras[nivel][random];
    arrayPalabra = palabraElegida.split("");
    console.log(arrayPalabra);
    if (arrayPalabra.indexOf(letra) !== -1) {
      //existe la letra
      if (letrasUsadas.indexOf(letra) === -1 ) {
        //la letra no fue usada
        letrasUsadas.push(letra);
        score += 2;
        document.getElementById("score").innerHTML = score;
        for (var i = 0; i < arrayPalabra.length; i++) {
          if (letra == arrayPalabra[i]) {
            palabraOculta[i] = letra;
            console.log(palabraOculta);
          }
        }
        document.getElementById("rayita").innerHTML = palabraOculta.join(" ");
        document.getElementById("usada").innerHTML = "Letras usadas:" + letrasUsadas + ",";
      } else {
        //la letra fue usada
        alert("Ya pusiste esa letra, ingresa otra");
      }
    } else {
      //no existe la letra
      
      if(letrasUsadas.indexOf(letra) !== -1){
        //existe en el array letrasUsadas
        
        alert("Ya pusiste esa letra, ingresa otra");
        
        letrasUsadas.join(",");

      }else if (letrasUsadas.indexOf(letra) == -1){
        //no existe en el array letrasUsadas
        contadorError += 1;
        console.log(contadorError);
        letrasUsadas.push(letra);
        imagen();
        document.getElementById("intentos").innerHTML = contadorError;
        document.getElementById("usada").innerHTML = "Letras usadas:" + letrasUsadas + ",";
      }
      
      console.log(letrasUsadas);
      
     
      //imprime muñequito
      if (contadorError == 6) {
        alert("Perdiste");
        setTimeout(function () {
          window.location.reload();
        }, 500);
        //muere muñeco
        //aparecer calavera
      }
    }
    if (palabraOculta.indexOf("_") === -1) {
      score += 20;
      document.getElementById("score").innerHTML = score;
      setTimeout(function () {
        alert("Completaste la palabra!!, elegí otro nivel para seguir jugando");
        
      }, 500);

    }
    if (score >= 100 && palabraOculta.indexOf("_") === -1) {

      setTimeout(function () {
        alert("GANASTEEEEEEEEEEEEEEEEE");
        contadorError = 0;
        palabraOculta = "";
        window.location.reload();
      }, 500);

    }
  }
}

function imagen() {
  imagenAhorcado = document.getElementById("imagenAhorcado");
  switch (contadorError) {
    case 0:
      imagenAhorcado.src = "./assets/img/Ahorcados/ahorcado_0.svg";
      break;
    case 1:
      imagenAhorcado.src = "./assets/img/Ahorcados/ahorcado_1.svg";
      break;
    case 2:
      imagenAhorcado.src = "./assets/img/Ahorcados/ahorcado_2.svg";
      break;
    case 3:
      imagenAhorcado.src = "./assets/img/Ahorcados/ahorcado_3.svg";
      break;
    case 4:
      imagenAhorcado.src = "./assets/img/Ahorcados/ahorcado_4.svg";
      break;
    case 5:
      imagenAhorcado.src = "./assets/img/Ahorcados/ahorcado_5.svg";
      break;
    case 6:
      imagenAhorcado.src = "./assets/img/Ahorcados/ahorcado_6.svg";
      break;


  }
}
