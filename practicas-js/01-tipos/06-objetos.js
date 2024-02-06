//Persona
let nombre = "Jaime";
let edad = 30;
let isEstudiante = false;

let persona = {
    nombre: nombre,
    edad: edad,
    isEstudiante: isEstudiante,
};
console.log(persona);
console.log(persona.nombre);
console.log(persona['edad']);

let llave = 'isEstudiante';
console.log(persona[llave]);

delete persona.isEstudiante;
console.log(persona);