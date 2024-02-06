//Short-Circuit Evaluation

//Falsy
//false, 0, '', null, undefined, NaN
let nombre = 'Juan';
let username = nombre || 'Invitado';
//Si nombre es falso(No tiene ningun valor), entonces se asigna el valor de 'Invitado'
console.log(username);

//Truthy
//true, 1, ' ', [], {}, function() {}

function fn1(){
    console.log('Soy fn1');
    return false;
}

function fn2(){
    console.log('Soy fn2');
    return true;
}

let x = fn1() && fn2();