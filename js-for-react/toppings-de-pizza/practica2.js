//Cambiar el color de acuerdo a los inputs

const colorInputRojo = document.getElementById('rojo');
const colorInputVerde = document.getElementById('verde');
const colorInputAzul = document.getElementById('azul');

const body = document.querySelector('body');

body.style.backgroundColor = `rgb(${colorInputRojo.value}, ${colorInputVerde.value}, ${colorInputAzul.value})`;

colorInputRojo.addEventListener('input', () => {   
    body.style.backgroundColor = `rgb(${colorInputRojo.value}, ${colorInputVerde.value}, ${colorInputAzul.value})`;
});

colorInputAzul.addEventListener('input', () => {
    body.style.backgroundColor = `rgb(${colorInputRojo.value}, ${colorInputVerde.value}, ${colorInputAzul.value})`;
});

colorInputVerde.addEventListener('input', () => {
    body.style.backgroundColor = `rgb(${colorInputRojo.value}, ${colorInputVerde.value}, ${colorInputAzul.value})`;
});

colorInputRojo.addEventListener('dblclick', () => {
    colorInputRojo.value = 0;
    body.style.backgroundColor = `rgb(${colorInputRojo.value}, ${colorInputVerde.value}, ${colorInputAzul.value})`;
});