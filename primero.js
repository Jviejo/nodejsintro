// esto es un comentario
/***
 * tambien esto es un comentario
 */
var nombre = "Juan"; // string
var precio = 12.4; // float
const PI = 3.14; // float constante 
var isActive = true; // boolean
var estadoCivil = "soltero"; // string
var fecha = new Date(2022, 0, 1); // date
console.log('nombre', nombre);
console.log('precio', precio);
console.log('is active', isActive);
console.log('estado civil', estadoCivil);

console.log('date', fecha.toLocaleDateString());
console.log('time', fecha.toLocaleTimeString());
console.log('iso', fecha.toISOString());
console.log('time zone', fecha.getTimezoneOffset());
console.log('utc string', fecha.toUTCString());
console.log('utc day', fecha.getUTCDate());
console.log('utc year', fecha.getUTCFullYear());
console.log('utc month', fecha.getUTCMonth());
console.log('utc hours', fecha.getUTCHours());
console.log('utc minutes', fecha.getUTCMinutes());
console.log('utc seconds', fecha.getUTCSeconds());
console.log('day', fecha.getDate());
console.log('year', fecha.getFullYear());
console.log('month', fecha.getMonth());
console.log('hours', fecha.getHours());
console.log('minutes', fecha.getMinutes());
console.log('seconds', fecha.getSeconds());
console.log('parse', new Date(Date.parse("1/3/2020 14:30")));




