/* 
let numero1 = parseFloat(prompt("Dame un número"));
let numero2 = parseFloat(prompt("Dame otro número"));

function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}
function restar(numero1, numero2) {
    console(numero1 - numero2)
}
function multiplicar(numero1, numero2) {
    return (numero1 * numero2)
}
let resultadoSuma = sumar(numero1, numero2);
let resultadoMultiplicacion = multiplicar(numero1, numero2);


console.log(`El resultado de la suma es ${resultadoSuma}`);
console.log(`El resultado de la multiplicación es ${resultadoMultiplicacion}`); */


/* function saludar(nombre = "Invitado", apellido="Anonimo"){
console.log(`Hola como estas: ${nombre} ${apellido}`);    
}

let nombre = "Felipe"
saludar(nombre, "Yosa")
saludar() */

let masa = parseFloat(prompt("Dame la masa"))
let altura = parseFloat(prompt("Dame la altura"))
function calcularIMC(masa, altura) {
    return (masa / (altura * altura))
};
let imprimir = calcularIMC(masa, altura);
alert(imprimir)
alert(calcularIMC(masa, altura))

