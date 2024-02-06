/**
 * Crear un algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let personas = [
    {
        id : 1,
        nombre : 'Jaime',
    },
    {
        id : 2,
        nombre : 'Juan',
    },
    {
        id : 3,
        nombre : 'Pedro',
    },
];
/* El arreglo de pares es el siguiente:
let pares = [
    [1, {id : 1, nombre : 'Jaime'}],
    [2, {id : 2, nombre : 'Juan'}],
    [3, {id : 3, nombre : 'Pedro'}],
]
*/

function toPairs(array){
    let pares = [];
    for (let i in array) {
        pares[i] = [array[i].id, array[i]];
        //pares.push([i + 1, array[i]]);
    }
    return pares;
}

console.log(toPairs(personas));