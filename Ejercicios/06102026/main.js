/* let loQueQuiera = document.getElementById("seccion1");
console.log(loQueQuiera);
let pConClase = document.getElementsByClassName("p1Clase")
console.log(pConClase);
let p = document.getElementsByTagName("p")
console.log(p); */
/* 
const section1 = document.querySelector("#seccion1");
console.log(section1);

let pepito = document.querySelector(".p1Clase");
console.log(pepito); */

/* let nombre = prompt("Dime tu nombre");
let h2_nombre =  document.querySelector("#nombre");
h2_nombre.textContent = `Usuario ${nombre}`; */


/* let h2_nombre = document.querySelector("#nombre");
h2_nombre.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzkzzbCAzkVsfPP_jfIGUBMR5K64qW6FiK4-03YBv2ou2Spx7NC8p12MpRjAjDLBKjt4_D626ve7zwQWllqi1YB1jj-kZiPOdoe7jcQ&s=10" alt="imagen de un gato"> '; */

let descripcion = document.querySelector("#perfil p");
descripcion.textContent = "Esta es una nueva descripción";
console.log(descripcion);


let enlace = document.querySelector("#mi-enlace");
enlace.textContent = "Enlace a google";
enlace.href = 'https://google.com';
enlace.target="_blank";

let imagen = document.querySelector("#mi-imagen");
imagen.src="https://m.media-amazon.com/images/I/61NlIpbonCL._AC_UY436_FMwebp_QL65_.jpg"