// NUMEROS
// 1.- Hallar el valor mayor de dos números
function encontrarMayor(a, b) {
    return Math.max(a, b);
}

// 2.- Sumar, restar, multiplicar y dividir los números.
function operacionesBasicas(a, b) {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

    return { suma, resta, multiplicacion, division };
}

// 3.- Calcular la raíz cuadrada de los números agregados.
function raizCuadrada(numero) {
    return Math.sqrt(numero);
}

// STRING
// 1.- Identificar la longitud de la cadena de texto agregada.
function longitudCadena(texto) {
    return texto.length;
}

// 2.- Invertir la cadena de texto: Hello - olleH
function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}

// 3.- Repetir el texto.
function repetirTexto(texto, veces) {
    return texto.repeat(veces);
}

// Arrays
// 1.- Agregar valores al array al principio. ["Soy","Hola", "Juan"]
function agregarAlPrincipio(arr, valores) {
    return valores.concat(arr);
}

// 2.- Revertir los valores por que tenga el array [1,2,3] [3,2,1]
function revertirArray(arr) {
    return arr.reverse();
}

// 3.- Sumar todos los números del array: [1,2,3] = 6
function sumarArray(arr) {
    return arr.reduce((total, numero) => total + numero, 0);
}

// Iteradores
// 1.- Muestrame los elementos del iterador
function mostrarElementos(iterador) {
    for (let elemento of iterador) {
        console.log(elemento);
    }
}

// 2.- Iterar un array de números y devolverme el valor * 2;
function multiplicarPorDos(arr) {
    return arr.map(numero => numero * 2);
}

// 3.- Mostrarme los índices del array que vas a iterar.
function mostrarIndices(arr) {
    for (let i in arr) {
        console.log(i);
    }
}

console.log(encontrarMayor(5, 10));

const operaciones = operacionesBasicas(8, 4);
console.log(operaciones);

console.log(raizCuadrada(16));

console.log(longitudCadena("Hola, soy Juan"));

console.log(invertirCadena("Hello"));

console.log(repetirTexto("Hola", 3));

const arrayOriginal = ["Hola", "Juan"];
const arrayConValores = agregarAlPrincipio(arrayOriginal, ["Soy"]);
console.log(arrayConValores);

const arrayNumerico = [1, 2, 3];
console.log(revertirArray(arrayNumerico));

console.log(sumarArray(arrayNumerico));

mostrarElementos(["A", "B", "C"]);

const arrayDuplicado = multiplicarPorDos([1, 2, 3]);
console.log(arrayDuplicado);

mostrarIndices(["A", "B", "C"]);
