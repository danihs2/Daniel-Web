const names = ['Irene', 'Fernando', 'Maria'];

/* normal
for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}*/

// forEach

//names.forEach(function(name) {
names.forEach((name) => {
  console.log(name);
}); //Irene, Fernando, Maria 

// map
// La funcion map funciona como for each pero retorna un nuevo array con los resultados de la funcion que se le pasa
// const newNames = names.map(function(name) {
const newNames = names.map((name) => { 
    return `${name}!`;
});

console.log(newNames); //["Irene!", "Fernando!", "Maria!"]

// Find
// La funcion find retorna el primer elemento que cumpla la condicion de la funcion que se le pasa
const nameFound = names.find((name) => {
    return name === 'Fernando';
});

//filter
// La funcion filter retorna un nuevo array con los elementos que cumplan la condicion de la funcion que se le pasa
const namesWithA = names.filter((name) => {
    return name.includes('a');
});

// Concat
const names2 = ['Juan', 'Pedro'];

const nombres_concatenados = names.concat(names2); //["Irene", "Fernando", "Maria", "Juan", "Pedro"]

console.log(nombres_concatenados);

// Reduce
// La funcion reduce retorna un unico valor a partir de un array

//Spread operator

console.log([...names, ...names2]); //["Irene", "Fernando", "Maria", "Juan", "Pedro"]
// El spread operator se usa para concatenar arrays o para pasar los elementos de un array como argumentos de una funcion. Tambien para pasar los elementos de un objeto como elementos de otro objeto