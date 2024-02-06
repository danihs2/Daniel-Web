

let user = {
    email : 'nico@holamundo.io',
    name : 'Nicolás',
    direccion : {
        calle : 'calle falsa 123',
        numero : 123,
    },
    activo: true,
    recuperarPassword: function() { //Esta es una funcion anonima, es una funcion que no tiene nombre porque ponerle nombre no tiene sentido
        console.log('Recuperando password');
    }, 
}