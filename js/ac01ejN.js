/*
Descripcion:Ejercicio1.- Escribir un programa donde nos de la bien venida y nos indique en que navegador estamos
ejecutando.
Desarrollador:Alvaro Henry Fajardo Daza.
Fecha:2024/04/20
Cambios:Ninguno
*/
function bienvenida() {
  // Función que da la bienvenida al usuario
  console.log("¡Bienvenido!");
  console.log("Este programa te indicará en qué navegador estás ejecutándolo.");
}

function navegadorActual() {
  // Función que detecta el navegador actual
  var userAgent = navigator.userAgent;
  var navegador;

  if (userAgent.indexOf("Chrome") > -1) {
    navegador = "Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    navegador = "Firefox";
  } else if (userAgent.indexOf("Edge") > -1) {
    navegador = "Edge";  
  } else {
    navegador = "Desconocido";
  }

  return navegador;
}
//Microsoft Edge también utiliza el motor de renderizado Chromium.
// Brave también utiliza el motor de renderizado Chromium.


// Llamada a las funciones
bienvenida();
var navegador = navegadorActual();
console.log("Estás ejecutando este programa en el navegador:", navegador);
