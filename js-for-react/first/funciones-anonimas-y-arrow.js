
const button1 = document.createElement('button');
button1.textContent = "Click me";

button1.addEventListener('click', function(){ //Funcion anonima
    alert("Cliceado!");
});

document.body.appendChild(button1);

function add (a, b) {
    return a + b;
}

const add2 = function(a, b) { //Funcion anonima
    return a + b;
}

const add3 = (a, b) => a + b; //Arrow function
//Sin llaves la arrow function retorna el valor de la expresion

console.log(add3(2, 3));

button1.addEventListener('click', () => { //Arrow function
    alert("Cliceado 2!");
});

//Las arrow functions no tienen su propio this, heredan el this del contexto en el que se encuentran
//Las arrow functions no tienen su propio arguments, heredan el arguments del contexto en el que se encuentran
//Las arrow functions no pueden ser usadas como constructores, no pueden ser instanciadas con new

const showObject = () => ({
    name: "Juan",
    age: 20,
}); //Se le pone parentesis para que no lo tome como un bloque de codigo

console.log(showObject());

const nombre = "Juan";

const texto = `concatenacion de strings = Hola ${showObject().name}`; //Template string

console.log(texto);

const condicional = false;

const texto2 = `concatenacion de strings con condicional = Hola ${condicional ? "Juan" : "Pedro"}`;

console.log(texto2);