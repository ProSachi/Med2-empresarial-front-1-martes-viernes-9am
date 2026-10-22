
let pid = document.querySelector("#pid");
console.log(pid);

let pclase = document.querySelector('.pclase');
console.log(pclase);

let ptres = document.querySelector('div p:nth-child(3)');
console.log(ptres);
pid.textContent = "Este es el nuevo contenido";
pclase.textContent = "Este es el nuevo contenido 2";
ptres.textContent = "Este es el nuevo contenido 3";

let nuevap = document.createElement('p');
nuevap.textContent = "Esta es la nueva p";
let nuevap2 = document.createElement('p');
nuevap2.textContent = "Esta es la nueva p2";

let divisor = document.querySelector('#primerdiv');
console.log(divisor);
divisor.append(nuevap, nuevap2);

import { usuarios } from "./data/usuario.js";

const listaUsuariosUL = document.querySelector('#lista-usuarios');

let btncargar = document.querySelector('#bntcargar');

btncargar.addEventListener('click',()=>{
// 2. Seleccionamos el contenedor en el HTML donde irá la lista.
const listaUsuariosUL = document.querySelector('#lista-usuarios');

// 3. Usamos .map() para transformar cada objeto de usuario en un string <li>.
//    Luego, .join('') une todos los strings en uno solo.
const usuariosHTML = usuarios.map(usuario => 
    `<li>${usuario.nombre} (ID: ${usuario.id})</li>`).join('');

// 4. Usamos .innerHTML para insertar toda la cadena de HTML en el <ul> de una sola vez.
listaUsuariosUL.innerHTML = usuariosHTML;

})  




