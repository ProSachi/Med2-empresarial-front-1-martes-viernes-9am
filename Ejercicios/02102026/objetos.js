
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

console.log(usuario.cursos[0]);
console.log(usuario["direccion"]["calle"]);


//desectructurar un objetos

const{nombre, cursos, direccion} = usuario;

console.log(nombre);

