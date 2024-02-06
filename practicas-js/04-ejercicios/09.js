let pairs = [
    [1, {nombre: 'Jaime', apellido: 'García'}],
    [2, {nombre: 'Juan'}],
    [3, {nombre: 'Pedro'}],
];

function toCollection(arr) {
    let collection = [];
    for (let i in arr) {
        let elemento = arr[i]; // [1, {nombre: 'Jaime', apellido: 'García'}]
        collection[i] = elemento[1]; //Primero crea el objeto
        collection[i].id = elemento[0];
    }
    return collection;
}

console.log(toCollection(pairs)); // La salida debe ser: [{id: 1, nombre: 'Jaime', apellido: 'García'}, {id: 2, nombre: 'Juan'}, {id: 3, nombre: 'Pedro'}]