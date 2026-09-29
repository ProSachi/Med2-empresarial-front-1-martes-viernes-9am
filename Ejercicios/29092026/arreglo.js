/* 
let nombres = ["Veronica", "Katherin", "Tique"];
let mixto = ["Andres", 19, false];
const clave = ["admin", "12345"]; */
/* console.log(nombres[1]);

for (let index = 0; index < nombres.length; index++) {
        console.log(nombres[index]);
}
//Agregar al final
nombres.push("Stiven");
console.log(nombres);
//eliminar del final
console.log(nombres.pop()); 
console.log(nombres);
//Agregar al principio
nombres.unshift("Felipe");
console.log(nombres);
//eliminar del principio
nombres.shift();
console.log(nombres);

console.log(nombres[1]);
nombres.splice(1,1)

console.log(nombres); */

/* nombres.forEach((nombre, indice)=>{
    console.log(`El nombre en el arreglo es ${nombre} que esta en el puesto ${indice + 1}`);
}) */

/*     let numeros = [1, 2, 3, 4, 5];

    let numerosDobles = numeros.map((n)=>{
       return n * 2;
    })
    console.log(numerosDobles); */

/* let nombres = ["Veronica", "Katherin", "Tique"];

let nombresEditado = nombres.map((cualquiera) => {
    return cualquiera + " Estudiante";
})

console.log(nombresEditado); */


let numeros = [1, 2, 3, 4, 5];

/* let numerosPares = numeros.map((numero) => {
    if (numero % 2 === 0) {
        return numero
    }
}) */

/* let numerosPares = numeros.filter((numero)=>{
    return numero % 2 === 0; 
});

console.log(numerosPares);
 */
/* Preguntale al usuario un nombre y buscalo en el array, si existe lo imprimes y si no existe indica que no existe ese usuario en la bd */
/* let nombres = ["Veronica", "Katherin", "Tique"];

let nombreBuscado = prompt("Ingresa un nombre") */

//Camino Malo - Por aqui no es el filtre hace algo por cada elemento.
/* let nombreFiltrado = nombres.filter((nombre) => {
    if (nombre === nombreBuscado) {
        alert(`El nombre ${nombreBuscado} si existe en la lista`)
    } else {
        alert(`El nombre ${nombreBuscado} no existe en la lista`)
    }
}) */

// Por aqui tampoco es - El forEach compara cada valor, hace algo con cada uno
/* nombres.forEach((nombre) => {
    if (nombre === nombreBuscado) {
        alert(`El nombre ${nombreBuscado} si existe en la lista`)
    } else {
        alert(`El nombre ${nombreBuscado} no existe en la lista`)
    }
}) */

//Camino Malo - Por aqui no es el filtre hace algo por cada elemento.
/* let nombreFiltrado = nombres.filter((nombre) => {
    return nombre === nombreBuscado
})

if (nombreFiltrado[0]===nombreBuscado) {
    alert(`El nombre ${nombreBuscado} si existe en la lista`)
} else {
    alert(`El nombre ${nombreBuscado} no existe en la lista`)
} */

/* if (nombres.includes(nombreBuscado)) {
    alert(`El nombre ${nombreBuscado} si existe en la lista`)
} else {
    alert(`El nombre ${nombreBuscado} no existe en la lista`)
}
 */

const usuario = {
    nombre: 'Carlos Rodriguez',
    edad: 32,
    esEstudiante: false,
    cursos: ['HTML', 'CSS', 'JavaScript'],
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    },
    saludar: function() {
        console.log('¡Hola mundo!');
    }
};

/* console.log(usuario.nombre);
console.log(usuario["edad"]); */

const {nombre, edad, cursos} = usuario

console.log(nombre);
console.log(edad);
console.log(cursos[2]);


