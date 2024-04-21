/*
Descripcion:Ejercicio3.- Escribir un programa para imprimir N numeros primos generados de forma aleatorio y
cargado en un array que sean menores al 110

Desarrollador: Alvaro Henry Fajardo Daza
Fecha:2024/04/20
Cambios:Ninguno
*/
// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Función para generar N números primos aleatorios menores que 110
function generarNumerosPrimos(N) {
    let numerosPrimos = [];
    while (numerosPrimos.length < N) {
        let num = Math.floor(Math.random() * 110);
        if (esPrimo(num)) {
            numerosPrimos.push(num);
        }
    }
    return numerosPrimos;
}

// Ejemplo de uso con N = 10
const N = 10;
const numerosPrimos = generarNumerosPrimos(N);
console.log("Números primos generados:", numerosPrimos);
