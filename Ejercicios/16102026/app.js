// Datos simulados
const usuario = { 
    nombre: "Ada Lovelace", profesion: "Programadora",
    nombre: "Felipe", profesion: "QA",
};

// 1. Atrapamos el contenedor padre que ya existe en el HTML
const contenedor = document.querySelector('#contenedor-usuarios');

// 2. CREACIÓN (Las piezas de Lego)
const tarjeta = document.createElement('article');
const titulo = document.createElement('h2');
const descripcion = document.createElement('p');

// 3. CONFIGURACIÓN (Darles forma)
tarjeta.classList.add('user-card');
titulo.textContent = usuario.nombre;
descripcion.textContent = usuario.profesion;

// 4. ENSAMBLAJE (Conectar las piezas)
// Metemos el h2 y el p dentro del article
tarjeta.appendChild(titulo);
tarjeta.appendChild(descripcion);

// 5. RENDERIZADO (Conectar al DOM principal)
contenedor.appendChild(tarjeta);
