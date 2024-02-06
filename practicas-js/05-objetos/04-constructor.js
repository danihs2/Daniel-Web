function Usuario(id, nombre, email){
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.recuperarPassword = function() { // Se llama metodo
        console.log('Recuperando password');
    }
}

let usuario1 = new Usuario(1, 'Juan', 'juan@holamundo.io');

console.log(Usuario.name); // Nombre del objeto
console.log(Usuario.length); // Cantidad de parametros que recibe el constructor


console.log(usuario1);

//Las funciones son objetos de primera clase en JS

function of(Fn, id, nombre){ // Funcion que recibe un constructor y un argumento
    return new Fn(id, nombre);
}

let usuario4 = of(Usuario, 4, 'Pedro', 'email');
console.log(usuario4);

//Atajo para crear un constructor
//Escribir "class" y presionar "tab" dos veces

class TipoUsuario2 {
    constructor(id, nombre, email){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
    recuperarPassword() {
        console.log('Recuperando password');
    }
}

let usuario2 = new TipoUsuario2(2, 'Pedro', 'pedro@holamundo.io');
let usuario3 = new TipoUsuario2(3, 'Juan', 'juan@holamundo.io');
console.log(usuario2);
console.log(usuario3);

let obj = {};
let obj2 = new Object();

const s1 = '1 + 1';
const s2 = new String('1 + 1');

console.log(s1, s2); // 1 + 1 String {"1 + 1"}
console.log(typeof s1, typeof s2); // string object
console.log(s2.valueOf()); // 1 + 1