
/* let numeroUsuario = parseInt(prompt("Dame un numero: "));

function calcularDoble(numero) {
    let resultado = numero * 2;
    return resultado;
}
let valorCalculado = calcularDoble(numeroUsuario);
console.log(valorCalculado);

console.log(calcularDoble("Hola"));
 */

/* Funciona Declaraciones 
function saludar() {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre === "derly") {
        return nombre;
    }
    console.log(`Hola ${nombre}`);
    return nombre;
} */

/* // Funcion Anonima
let saludar = function() {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre === "derly") {
        return nombre;
    }
    console.log(`Hola ${nombre}`);
    return nombre;
}; */

/* 
function saludar() {
    console.log(`Hola`);
}

//funcion anonima
let saludar2 = function() {
    console.log(`Hola`);
};
saludar();
saludar2(); */


function saludar(nombre) {
    console.log(`Hola`);
    return nombre;
}
//volver funcion anonima
let saludar = function (nombre) {
    console.log(`Hola`);
    return nombre;
}

// quitar la palabra function y a la derecha de los parentesis agregar la flecha
let saludar = (nombre) => {
    console.log(`Hola`);
    return nombre;
}

//SI es un solo parametro se pueden eliminar los ()
let saludar = nombre => {
    console.log(`Hola`);
    return nombre;
}

// Si la función es de una sola linea se pueden omitir {}
let saludar = nombre => nombre;

let sumar = (a,b)=>a+b;






