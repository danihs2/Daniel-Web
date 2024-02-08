export function add(a, b) {
    return a + b;
}

export function multiply(a, b){
    return a * b;
}

export const title = "Titulo del modulo"; //Se puede exportar variables, funciones, clases, objetos, etc

export default function (a, b) { //Solo se puede exportar una funcion por defecto por modulo
    return a - b;
}