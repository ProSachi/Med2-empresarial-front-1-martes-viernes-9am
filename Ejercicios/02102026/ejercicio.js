/* // 1. Declaramos una estructura de datos compleja: un Arreglo de Objetos
const carritoCompras = [
    { id: 1, producto: "Laptop", precio: 1200, categoria: "Tecnología" },
    { id: 2, producto: "Libro JavaScript", precio: 40, categoria: "Educación" }
];

carritoCompras.push({ id: 3, producto: "Teclado", precio: 30, categoria: "Tecnología" })
console.log(carritoCompras);
let nuevo = { id: 4, producto: "Mouse", precio: 20, categoria: "Tecnología" }
carritoCompras.push(nuevo);
console.log(carritoCompras);

let carritoFiltrado = carritoCompras.filter((c) => {
    return c.categoria === "Tecnología"
})

carritoFiltrado = carritoCompras.filter((c) => {
    return c.precio >= 50
})

let carrito2 = carritoCompras.filter((s)=>{
    return s.producto === "Teclado";
})


console.log(carrito2);

 */


/* const servidor = { 
    host: "localhost", 
    puerto: 8080, 
    db: { user: "admin", pass: "1234" } 
};

const {host, puerto, ssl = true } = servidor

console.log(host);
console.log(ssl)
 */

const numero = [1, 2, 3, 4];
const numero2 = [5, 6, 7, 8, 9];

let numero3 = [...numero, ...numero2]
console.log(numero3);
