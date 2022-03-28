var objetoNombre = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
    address: {
        calle: "Calle falsa 123",
        ciudad: "Ciudad falsa",
        pais: "Pais falso",
        postalCode: 12345,
        geo: {
            lat: 123.123,
            lng: 123.123
        }
    }
}

const { edad } = objetoNombre;
console.log(edad); // 23
// copiaEdad es un alias de edad
// como tenemos definido edad antes no podemos usar edad
const { nombre, edad: copiaEdad } = objetoNombre;
console.log(nombre, copiaEdad); // Juan 23

const { address } = objetoNombre;
console.log('address', address);
// { calle: 'Calle falsa 123', ciudad: 'Ciudad falsa', pais: 'Pais falso', postalCode: 12345, lat: 123.123, lng: 123.123 }

// destructuring nested objects
const { address: { calle, geo: { lat } } }  = objetoNombre;
console.log('address calle', calle, lat); // address calle Calle falsa 123


const { address: { calle: calleCopia }, ...resto } = objetoNombre;
console.log('calleCopia = ', calleCopia, ' resto =', resto);
// calleCopia =  Calle falsa 123  resto = { nombre: 'Juan', apellido: 'Perez', edad: 23 }


var arrayObject = ["Juan", "Perez", 23, 
                {"nombre": "Juan", "apellido": "Perez", "edad": 23}];
const [nombre2, apellido, edad2, juan] = arrayObject;
console.log('arrayObject ', nombre2, apellido, edad2); // Juan Perez 23
console.log(juan)

var v1 = [1, 2, 3, 4, new Date()]
const [primero, ...restoArray] = v1
console.log('primero = ', primero, 'resto = ', ...restoArray)

var v2 = [6, 7, 8, 9, 10]

// union de 2 vectores
var v3 = [...v1, ...v2]
console.log('v3 = ',v3) //  [ 1, 2, 3, 4,  5,    6, 7, 8, 9, 10  ]

