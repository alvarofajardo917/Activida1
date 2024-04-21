/*
Descripcion:Ejercicio5.- En base a 2 array de nombres y apellidos, genere un nuevo array combinando de forma
aleatoria ambos, formatee los nombres convirtiendo el primer elemento del nombre y apellido en
mayúscula y el resto en minúscula .(20Pts)
Desarrollador: Alvaro Henry Fajardo Daza
Fecha:2024/04/20
Cambios:Ninguno
*/

// Cabecera: Función para combinar nombres y apellidos de forma aleatoria y formatearlos
// Comentario: Esta función toma dos arrays de nombres y apellidos, los combina aleatoriamente y formatea el resultado.
// Validaciones: Se asume que los arrays de nombres y apellidos tienen la misma longitud y que contienen al menos un elemento.

// Función para generar un nuevo array combinando nombres y apellidos de forma aleatoria
function combinarNombres(nombres, apellidos) {
    // Combinar nombres y apellidos
    let nombresCombinados = nombres.concat(apellidos);

    // Función para formatear el nombre
    function formatearNombre(nombre) {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    }

    // Formatear cada nombre en el array combinado
    nombresCombinados = nombresCombinados.map(formatearNombre);

    // Mezclar el array combinado de forma aleatoria
    nombresCombinados = nombresCombinados.sort(() => Math.random() - 0.5);

    return nombresCombinados;
}

// Ejemplo de uso
const nombres = ["juan", "maría", "carlos"];
const apellidos = ["pérez", "gómez", "rodríguez"];

const nombresFormateados = combinarNombres(nombres, apellidos);
console.log(nombresFormateados);
