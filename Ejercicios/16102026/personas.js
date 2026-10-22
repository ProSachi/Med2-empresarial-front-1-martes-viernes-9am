import { usuarios } from "./data/usuario.js";

const contenedor = document.getElementById('contenedor');

function crearTarjeta({ id, nombre }) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta';

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = nombre.charAt(0).toUpperCase();

  const titulo = document.createElement('h2');
  titulo.textContent = nombre;

  const etiqueta = document.createElement('span');
  etiqueta.className = 'id';
  etiqueta.textContent = `ID #${id}`;

  tarjeta.append(avatar, titulo, etiqueta);
  return tarjeta;
}

contenedor.append(...usuarios.map(crearTarjeta));