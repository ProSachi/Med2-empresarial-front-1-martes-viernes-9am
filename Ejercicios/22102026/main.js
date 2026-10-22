/* console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');


console.log('Pedido 1: Tomado');
setTimeout(function () {
    console.log('Pedido 2: Plato complejo listo');
}, 2000);
console.log('Pedido 3: Limonada servida');

setTimeout((a, b) => a + b, 3000)

function sumar(a, b){
    return a + b;
} */


/* // Simulación de una petición asíncrona que tarda en responder
const consultarServidor = (exito) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Datos de usuarios descargados correctamente.");
            } else {
                reject("Error 504: El servidor no responde.");
            }
        }, 2000); // Simula 2 segundos de espera
    });
};

// Consumo de la promesa
consultarServidor(false)
    .then((respuesta) => {
        console.log("ÉXITO:", respuesta);
    })
    .then
    .catch((error) => {
        console.error("FALLO:", error);
    }); */

/* 
    // Función tradicional
async function obtenerDatos() {
    return "Datos listos";
}

// Arrow function
const procesarPago = async () => {
    return "Pago procesado";
};
 */


const consultarAPI = async () => {
    let url = "https://6ada65787512f497b3ffe957.mockapi.io/api/v1/productos"
    try {
        // 1. Petición HTTP GET al servidor remoto
        const respuesta = await fetch(url);

        // Validación de estado HTTP (ej. si la URL no existe o hay error 404/500)
        if (!respuesta.ok) {
            throw new Error(`Error de red: ${respuesta.status}`);
        }

        // 2. Transformación de la respuesta cruda a JSON nativo
        const datosUsuarios = await respuesta.json();

/*         console.log("Usuarios obtenidos del servidor:", datosUsuarios);
 */        return datosUsuarios;
    } catch (error) {
        console.error("Fallo en la petición asíncrona:", error.message);
    }
};



let section = document.querySelector("#sectionDatos")
let btnCarga = document.querySelector("#btnCargar")
const ul = document.createElement("ul")
section.appendChild(ul);

btnCarga.addEventListener('click', async () => {
    let datos = await consultarAPI();
    datos.forEach((dato) => {
        const li = document.createElement("li");
        li.textContent = `${dato.name} (${dato.precio})`;
        ul.appendChild(li);
    });

    

});




