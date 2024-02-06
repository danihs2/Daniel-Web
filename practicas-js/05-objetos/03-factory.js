//Factory function

function createUser(id, email, name, activo) { //Es una funcion que crea un objeto con las propiedades que se le pasan como argumento
    return {
        id,
        email,
        name,
        activo,
        recuperarPassword: function() {
            console.log('Recuperando password');
        },
    };
}

let user1 = createUser(1, 'nico@holamundo.io', 'Nicolás', true);
let user2 = createUser(2, 'rodolfo@holamundo.io', 'Rodolfo', false);

console.log(user1);
console.log(user2);