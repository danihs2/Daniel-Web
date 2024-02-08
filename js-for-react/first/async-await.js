//
console.log("Empieza el programa async-await");

/* Ejemplo de uso
let data1 = fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
});*/
/*
let data2 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => console.log(data));
*/

fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((data) => agregar(data));

const div = document.createElement('contenido1');
const ul = document.createElement('ul');

const agregar = (data) => {
    data.forEach((post) => {
        const li = document.createElement('li');
        li.textContent = post.title;
        ul.appendChild(li);
    });
    div.appendChild(ul);
}

document.body.appendChild(div);

//Fetch es una funcion que retorna una promesa, por lo que se puede usar async await
// En este caso fetch retorna una promesa que resuelve en un objeto response, el cual tiene un metodo json que retorna una promesa que resuelve en los datos del json