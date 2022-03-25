var objetoNombre = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
    address: {
        calle: "Calle falsa 123",
        ciudad: "Ciudad falsa",
        pais: "Pais falso",
        postalCode: 12345,
        lat: 123.123,
        lng: 123.123
    }
}

const {  edad } = objetoNombre;
console.log(edad); // 23
// copiaEdad es un alias de edad
// como tenemos definido edad antes no podemos usar edad
const {  nombre, edad: copiaEdad } = objetoNombre;
console.log(nombre, copiaEdad); // Juan 23

const {  address } = objetoNombre;
console.log(address); // { calle: 'Calle falsa 123', ciudad: 'Ciudad falsa', pais: 'Pais falso', postalCode: 12345, lat: 123.123, lng: 123.123 }

// desstructuring nested objects
const {  address: { calle } } = objetoNombre;
console.log(calle); // Calle falsa 123


const {  address: { calle:calleCopia }, ...resto } = objetoNombre;
console.log(calleCopia, resto); // Calle falsa 123


var arrayObject = ["Juan", "Perez", 23 ]
const [ nombre2, apellido, edad2] = arrayObject;
console.log(nombre2, apellido, edad2); // Juan Perez 23

var v1 = [1,2,3,4,5]
const [primero, ...restoArray] = v1
console.log(primero, ...restoArray)

var v2 = [6, 7, 8, 9, 10]

// union de 2 vectores
var v3 = [...v1, ...v2]
console.log(v3) //  [ 1, 2, 3, 4,  5,    6, 7, 8, 9, 10  ]

