import { sumar, restar, multiplicar, division } from "./funciones.js";


const SALIR = "mayday";
let palabra;
let contador = 0;
let numero1 = 0, numero2 = 0;
do {
    let opcion = parseInt(prompt("Que deseas realizar, selecciona una opción: \n 1. Suma. \n 2. Restar. \n 3. Multiplicar. \n 4. Dividir. \n 5. Salir."));

    if (opcion > 0 && opcion < 5) {
        numero1 = parseInt(prompt("Dame un numero"));
        numero2 = parseInt(prompt("Dame otro numero"));
    }

    switch (opcion) {
        case 1:
            sumar(numero1, numero2);
            break;
        case 2:
            restar(numero1, numero2);
            break;
        case 3:
            multiplicar(numero1, numero2);
            break;
        case 4:
            division(numero1, numero2);
            break;
        case 5:
            palabra = prompt("Palabra clave para salir")
            break;
        default:
            alert("Escribi bn omee!");
            break;
    }
    contador++;
    console.log("estoy en el ciclo");
} while (!(palabra === SALIR));
alert(`Saliste de la aplicación, la usaste ${contador} veces`)

