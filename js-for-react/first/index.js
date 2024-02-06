const title = document.createElement('h1');
title.innerText = 'Hola Mundo desde JS!';

const button = document.createElement('button');
button.innerText = 'Presioname';

button.addEventListener('click', function(){
    alert('Hola Mundo desde JS!');
}
)

button.addEventListener('click', () => { 
    alert('Hola Mundo!');
});

document.body.append(title);
document.body.append(button);