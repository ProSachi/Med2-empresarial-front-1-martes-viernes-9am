let valorCompra;
const DESCUENTO1 = 0.05;
const DESCUENTO2 = 0.07;
const TOPE1 = 50000;
const TOPE2 = 100000;
let valotTotal;

valorCompra = parseFloat(prompt("Ingrese el valor de la compra"));

if (valorCompra < TOPE1) {
    console.log("no aplica descuento");
} else if (valorCompra >= TOPE1 && valorCompra < TOPE2) {
    console.log("Descuento aplicar es del 5%");
    valotTotal = valorCompra - (valorCompra * DESCUENTO1)
    console.log(`Valor a pagar: ${valotTotal}`);
} else {
    console.log("Descuento aplicar es del 7%");
    valotTotal = valorCompra - (valorCompra * DESCUENTO2);
    console.log(`Valor a pagar: ${valotTotal}`);
} 
