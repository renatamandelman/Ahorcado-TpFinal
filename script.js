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

document.getElementById("bajo").onclick = function () {
  getRandom(0);
  mostrarRayas();
}

document.getElementById("medio").onclick = function () {
  getRandom(1);
  mostrarRayas();
}

document.getElementById("alto").onclick = function () {
  getRandom(2);
  mostrarRayas();

}

function mostrarRayas(){
  document.getElementById("rayita").innerHTML = palabraOculta.join(" ");
  
}

function getRandom(nivel) {
  random = Math.floor(Math.random() * palabras[nivel].length);
  longitud = palabras[nivel][random].length;
  palabraOculta = Array(longitud).fill("_");
 
  return random;
}

function verLetras(nivel) {
  letra = document.getElementById("inputLetra").value;

  
  if (palabras[nivel][random].indexOf(letra) !== -1 &&
    letrasUsadas.indexOf(letra) === -1) {
    //existe la letra en la palabra pero no fue usada
    
    letrasUsadas.push(letra);
    score += 2;
  } else if (palabras[nivel][random].indexOf(letra) !== -1 &&
  letrasUsadas.indexOf(letra) != -1) {
    //existe la letra en la palabra pero fue usada

    alert("Esta letra ya fue ingresada, ingrese otra");
  } else {
    //no existe la letra en la palabra
  }

  for (var i = 0; i < palabras[nivel][random].length; i++) {
    if (indexOf(  ) !== -1) {
    }
  }

  letra.value = "";
}

arrPalabra = Array(longitud).fill("");