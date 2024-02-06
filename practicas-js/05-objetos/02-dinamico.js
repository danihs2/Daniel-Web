const user = {id : 1}; // Es un objeto que se puede modificar propiedades y metodos pero no se puede cambiar el tipo de dato
user.nombre = 'Nicolás';
user.guardar = function() {
    console.log('Guardando usuario: ', user.nombre);
}

user.guardar();

delete user.nombre;
delete user.guardar;
console.log(user);

const user2 = Object.freeze({id : 2}); // Es un objeto que no se puede modificar propiedades, metodos ni el tipo de dato
user2.nombre = 'Nicolás';
console.log(user2); // No se puede agregar propiedades

const user3 = Object.seal({id : 3}); // Es un objeto que se puede modificar propiedades y metodos pero no se puede cambiar el tipo de dato