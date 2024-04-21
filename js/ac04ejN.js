/*
Descripcion: Ejercicio4.- Escribe un programa que pida una frase y escriba:(30Pts)
• Cuantas veces aparece la letra “o”. Ejemplo Hola → 1
• Las vocales que aparecen. Ejemplo Hola → 2
• Cuántas veces aparecen cada una de las vocales.Ejemplo Hola → o:1 , a:1

Desarrollador: Alvaro Henry Fajardo Daza
Fecha:2024/04/20
Cambios:Ninguno
*/


// Importar el módulo readline para leer la entrada del usuario
const readline = require('readline');

// Crear una interfaz de lectura y escritura
const rl = readline.createInterface({
  input: process.stdin,  // Usar la entrada estándar del proceso (entrada del usuario)
  output: process.stdout  // Usar la salida estándar del proceso (consola)
});

// Función para analizar la frase ingresada
function analizarFrase(frase) {
    // Contar la cantidad de veces que aparece la letra 'o' en la frase
    const letraO = frase.toLowerCase().split('o').length - 1;

    // Objeto para contar la cantidad de cada vocal en la frase
    const vocales = {a: 0, e: 0, i: 0, o: 0, u: 0};

    // Variable para contar la cantidad total de vocales en la frase
    let totalVocales = 0;

    // Iterar sobre cada letra de la frase
    for (let letra of frase.toLowerCase()) {
        // Verificar si la letra es una vocal y actualizar el contador correspondiente
        if (vocales.hasOwnProperty(letra)) {
            vocales[letra]++;
            totalVocales++;
        }
    }

    // Mostrar los resultados
    console.log("Veces que aparece la letra 'o':", letraO);
    console.log("Cantidad total de vocales en la frase:", totalVocales);
    console.log("Vocales que aparecen:", vocales);
}

// Preguntar al usuario que ingrese una frase
rl.question('Por favor ingresa una frase: ', (frase) => {
  // Llamar a la función analizarFrase con la frase ingresada
  analizarFrase(frase);
  // Cerrar la interfaz de lectura y escritura
  rl.close();
});
