//Seleccionar elementos por su id
const titulo = document.getElementById('titulo');

console.log(titulo);
console.log(titulo.innerText); // Texto interno

//Seleccionar elementos por su clase
const toppings = document.getElementsByClassName('topping');

console.log(typeof toppings);
console.log(toppings);
console.log(toppings[0].innerText); // Texto interno

//Querry selector

const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');

const primerTopping = document.querySelector('.topping');

//console.log(primerTopping);

primerTopping.style.backgroundColor = 'blue';
primerTopping.style.textTransform = 'uppercase';

const listaDeToppings = document.getElementById('lista-de-toppings');

console.log(listaDeToppings);
console.log("InnerText: ", listaDeToppings.innerText);
console.log("Text Content: ", listaDeToppings.textContent); //Incluye los espacios en blanco de html

const enlaces = document.getElementsByTagName('a');
console.log(enlaces); 
enlaces[0].href = 'https://www.google.com';
enlaces[0].innerText = 'Google';
enlaces[0].target = '_blank';
enlaces[0].setAttribute('style', 'color: red;');

const losToppings = document.querySelectorAll('.topping');

console.log(losToppings);

losToppings[1].addEventListener('click', () => {
    enlaces[0].classList.add('clase-1');
});

losToppings[2].addEventListener('click', () => {
    enlaces[0].classList.remove('clase-1');
}); 

losToppings[3].addEventListener('click', () => {
    enlaces[0].classList.toggle('clase-1');
});

//Agregar un elemento a la pagina

const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Topping nuevo';

losToppings[0].addEventListener('click', () => {
    document.getElementById('lista-de-toppings').append(toppingNuevo);
});