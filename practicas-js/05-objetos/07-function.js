function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando ando...');
    }
}

let punto = { z : 3 };
//Punto.call(punto, 1, 2); //Es para llamar a la funcion Punto y pasarle los parametros que necesita (Extendemos objetos)
Punto.apply(punto, [1, 2]); //Es para llamar a la funcion Punto y pasarle los parametros que necesita en array(Extendemos objetos)
console.log("Primer Consol: ", punto);

//Funcion tambien es un objeto

const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando ando...');
    }
`);

const p1 = new Point(1, 2);
console.log(p1); // Point {x: 1, y: 2, dibujar: ƒ}

console.log(Object.keys(punto)); //Muestra las llaves del objeto

for(let key in punto) {
    console.log(key, punto[key]);
}