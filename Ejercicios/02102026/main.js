/* let numeroUsuairo = parseInt(prompt("Dame un numero: "));
let mulplicacion;
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 */
/* numero.forEach((n) => {
    console.log(`${n} * ${numeroUsuairo} = ${n*numeroUsuairo}`);
}) */
/* 
let resultado = numero.map((n) => {
    return n * numeroUsuairo;
})
console.log(resultado);

resultado.forEach((r) => {
    if (r % 3 == 0 && r % 5 == 0) {
        console.log("Fizz buzz");
    } else if (r % 3 == 0) {
        console.log("Fizz");
    } else if (r % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(r);
    }
})


let filtrados = resultado.map((r) => {
    if (r % 3 == 0 && r % 5 == 0) {
        return "Fizz buzz"
    } else if (r % 3 == 0) {
        return "Fizz"
    } else if (r % 5 == 0) {
        return "buzz"
    } else {
        return r;
    }
})

console.log(filtrados);
 */
//desestructuracion de arreglo

/* 
const[primero, segundo, tercero] = numero;

console.log(primero);
console.log(tercero); */

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const numeroCopia = [...numero];

console.log(` El arreglo original ${numero}`);

console.log(` El arreglo copia ${numeroCopia}`);

numeroCopia.push(10);


console.log(` El arreglo original ${numero}`);

console.log(` El arreglo copia ${numeroCopia}`);    



