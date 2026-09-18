
/* let vida = 3;

while (vida > 0) {
    console.log(`Te quedan ${vida} vidas`);
    vida--;//vida = vida -1; 
}
console.log(`Salimos del ciclo`);  */


/* let cantidadDeseos = 3;
while (cantidadDeseos > 0) {
    alert(`tienes ${cantidadDeseos} por pedir`);
    prompt(`Pide un deseo`)
    cantidadDeseos--;
} */


/* let estudiantes = ["Maria", "Chavez", "Andres", "Felipe"]
for (let index = 0; index < estudiantes.length; index++) {
    const element = estudiantes[index];
    console.log(element);
} */

/* let numero = parseInt(prompt("Dame un numero"));
for (let index = 1; index <= 10; index++) {
    console.log(index * numero);
} */


let aleatorio = Math.floor(Math.random() * 10) + 1;
console.log(aleatorio);
let aleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(aleatorio2);
alert("Adivinar el numero aleatorio, tienes 3 intentos");
let intentos = 3;
let condition = true;
do {
    let numeroUsuario = parseInt(prompt("Dame un numero 1"));
    let numeroUsuario2 = parseInt(prompt("Dame un numero 2"));

    if (numeroUsuario === aleatorio && numeroUsuario2 === aleatorio2) {
        console.log("Adivinaste");
        condition = false;
    } else {
        console.log("No adivinaste, sigue intentanto");
        intentos--;
    }
    if (intentos <= 0) {
        console.log("Se acabaron lo intentos");
        condition = false;
    }
} while (condition);




