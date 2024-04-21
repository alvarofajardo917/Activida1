/*
Descripcion:Ejercicio2.- Escribir un programa donde nos solicite un usuario y contraseña, validar la contraseña con
“D153n0W3b2” y el usuario debería ser cualquiera de los siguientes nombres: juan, pedro, maria, raul.

Desarrollador: Alvaro Henry Fajardo Daza
Fecha:2024/04/20
Cambios:Ninguno
*/
// Función para solicitar las credenciales al usuario
const readline = require('readline');//leer datos de la entrada estándar (stdin) y escribir en la salida estándar (stdout).

// Crear una interfaz de lectura y escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para solicitar credenciales
function solicitarCredenciales() {
  return new Promise((resolve, reject) => {
    rl.question("Ingrese su nombre de usuario: ", (usuario) => {
      rl.question("Ingrese su contraseña: ", (contraseña) => {
        resolve({ usuario, contraseña });
      });
    });
  });
}

// Función para validar credenciales
function validarCredenciales(credenciales) {
  // Usuarios válidos y contraseña válida
  const usuariosValidos = ["juan", "pedro", "maria", "raul"];
  const contraseñaValida = "D153n0W3b2";

  // Verificar si el usuario y la contraseña son válidos
  if (usuariosValidos.includes(credenciales.usuario.toLowerCase()) && credenciales.contraseña === contraseñaValida) {
    return true;
  } else {
    return false;
  }
}

// Función principal del programa
async function main() {
  console.log("Bienvenido al sistema");

  // Solicitar credenciales
  const credenciales = await solicitarCredenciales();

  // Validar credenciales
  if (validarCredenciales(credenciales)) {
    console.log("Credenciales válidas. Bienvenido, " + credenciales.usuario.charAt(0).toUpperCase() + credenciales.usuario.slice(1));
  } else {
    console.log("Credenciales inválidas. Acceso denegado.");
  }

  // Cerrar la interfaz de lectura
  rl.close();
}

// Llamar a la función principal para iniciar el programa
main();
