const user = {
    name: 'Joe',
    age: 23,
}

function showUser(user) {
    //return `Olá, ${user.name}, você tem ${user.age} anos.`
    return '<h1>Hola, ' + user.name + ', tienes ' + user.age + ' años.</h1>';
}

console.log(showUser(user));

document.body.innerHTML = showUser(user); // <h1>Hola, Joe, tienes 23 años.</h1>

//document.body.appendChild(showUser(user)); // Error porque showUser no es un elemento del DOM

function showUser2({name}) { // Espera un objeto que tenga una propiedad name
    return '<h1>Hola, ' + name + '</h1>';
}

function showUser3(user){
    const {name, age} = user;

    console.log("Show user 3: ", name, age);
    return "<h1>Hola, " + name + ", tienes " + age + " años.</h1>";
}

console.log(showUser2(user)); // <h1>Hola, Joe</h1>
console.log(showUser3(user)); // <h1>Hola, Joe, tienes 23 años.</h1>

document.body.innerHTML = showUser2(user); 


//Agregar un elemento a la pagina
const contenedor1 = document.getElementById('contenedor1');
const titulo1 = document.createElement('h1');
titulo1.textContent = "Hola desde JS";

document.getElementById('contenedor1').appendChild(titulo1);
//El codigo marcara error porque el elemento con id contenedor1 no existe en el html ya que se modifico anteriormente
