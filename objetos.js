var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
console.log(myCar); // { make: 'Ford', model: 'Mustang', year: 1969 }
console.log(myCar.make); // Ford
console.log(myCar.model); // Mustang
console.log(myCar.year); //1969

console.log(myCar['make']); // Ford
console.log(myCar['model']); // Mustang
console.log(myCar['year']); // 1969

var yourCar = myCar;
console.log(yourCar); // { make: 'Ford', model: 'Mustang', year: 1969 }
yourCar.cc = 2300;
console.log(yourCar); // { make: 'Ford', model: 'Mustang', year: 1969, cc: 2300 }
console.log(myCar); // { make: 'Ford', model: 'Mustang', year: 1969, cc: 2300 }

var cadena = '{ "make": "Ford", "model": "Mustang", "year": 1969, "cc": 2300 }'
var objeto = JSON.parse(cadena);
console.log(objeto); // { make: 'Ford', model: 'Mustang', year: 1969, cc: 2300 }

JSON.stringify(objeto); // '{ "make": "Ford", "model": "Mustang", "year": 1969, "cc": 2300 }'

console.log(JSON.stringify({ fecha: new Date() })); // '{ "fecha": "2019-01-01T00:00:00.000Z" }'

var factura = {
    numero: 123,
    fecha: new Date(2022, 0, 1),
    cliente: {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    items: [
        {
            descripcion: 'Monitor 20"',
            precio: 300
        },
        {
            descripcion: 'Teclado',
            precio: 20
        }
    ]
}
console.log(JSON.stringify(factura));
function calcularTotal(factura) {
    var total = 0
    for (let item of factura.items) {
        total += item.precio;
    }
    return total
}

console.log(calcularTotal( factura)); // 320