//For of
let animales = ['perro', 'gato', 'loro', 'pez', 'elefante'];

for (let animal of animales) {
  console.log(animal); //Imprime cada animal
}

//For in
let persona = {
  nombre: 'Jaime',
  edad: 30,
  isEstudiante: false
};

for (let propiedad in persona) {
  console.log(propiedad); //Imprime cada propiedad
  console.log(persona[propiedad]); //Imprime el valor de cada llave
} //For of