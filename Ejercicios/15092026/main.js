let edad = 10;
let edad2 = 15;
let tieneEntrada = false;

/* alert(`La edad es ${edad} y la segunda edad es ${edad2}`); */
/* 
let respuesta = edad > edad2
console.log(respuesta);

respuesta = edad > edad2 || edad === edad2
console.log(respuesta); */


const EDAD_MINIMA = 18, NACIONALIDAD = "colombia";
let edadUsuario, nacionalidadUsuario;
edadUsuario = parseInt(prompt("Dime tu edad: "));


if (edadUsuario >= EDAD_MINIMA) {
    nacionalidadUsuario = prompt("Dime tu pais de nacimiento: ");
    if (nacionalidadUsuario === NACIONALIDAD) {
        console.log("Puede votar");
    } else {
        let nacionalizado = prompt("Eres nacionalizado: ");
        if (nacionalizado === "si") {
            console.log(`Eres apto para votar`);
        } else {
            console.log(`Repaila papasho`);
        }
    }
} else {
    console.log("No cumples con la edad minima");
}


/* let respuesta2 = EDAD_MINIMA > edadUsuario || NACIONALIDAD != nacionalidadUsuario;
console.log(`Eres apto para votar: ${respuesta2}`);
 */








