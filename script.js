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
var cant = "";
var input;
var score = 0;

document.getElementById("bajo").onclick = function () {
  getRandom(0);

  //console.log(longitud);
  //console.log(palabras[0][random]);
};

document.getElementById("medio").onclick = function () {
  getRandom(1);
};

document.getElementById("alto").onclick = function () {
  getRandom(2);
};

function getRandom(nivel) {
  random = Math.floor(Math.random() * palabras[nivel].length);
  longitud = palabras[0][random].length;

  for (var i = 0; i < longitud; i++) {
    cant += " _ ";
  }
  document.getElementById("rayita").innerHTML = cant;

  return random;
}

function verLetras(nivel) {
  input = document.getElementById("inputLetra").value;
  if (
    palabras[nivel][random].indexOf(input) !== -1 &&
    letrasUsadas.indexOf(input) === -1
  ) {
    //existe la letra en la palabra pero no fue usada
    letrasUsadas.push(input);
    score += 2;
  } else if (
    palabras[nivel][random].indexOf(input) !== -1 &&
    letrasUsadas.indexOf(input) != -1
  ) {
    //existe la letra en la palabra pero fue usada

    alert("Esta letra ya fue ingresada, ingrese otra");
  } else {
    //no existe la letra en la palabra
  }

  for (var i = 0; i < palabras[nivel][random].length; i++) {
    if (indexOf(  ) !== -1) {
    }
  }

  input.value = "";
}
