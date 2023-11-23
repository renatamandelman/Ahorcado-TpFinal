var nombre = "";
document.getElementById("ingresar").onclick = function () {

  if (document.getElementById("inputNombre").value == "") {
    alert("Ingrese un nombre");
  } else {
    nombre = document.getElementById("inputNombre").value;
    document.getElementById("nombre").innerHTML = "Te damos la bienvenida, " + nombre + "!!";
  }


}
document.getElementById("instrucciones").onclick = function () {
  document.getElementById("exampleModal").style.display = "block";
  document.getElementById("exampleModal").style.transition = "opacity .15s linear";

}



function cerrar() {
  document.getElementById("exampleModal").style.display = "block";


}
document.getElementById("close").onclick = function () {
  document.getElementById("exampleModal").style.display = "none";

}
document.getElementById("x").onclick = function () {
  document.getElementById("exampleModal").style.display = "none";

}
