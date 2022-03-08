var nombre = 'JUAN'
var edad = 34

var resultado = `${nombre} 
tiene ${edad} años`;

console.log(resultado);

var texto = "Este es un Texto";
console.log(texto.toUpperCase()); //ESTE ES UN TEXTO
console.log(texto.toLowerCase()); //este es un texto
console.log(texto.length); //16
console.log(texto.charAt(0)); //E
console.log(texto.charAt(texto.length - 1)); //o
console.log(texto.charAt(texto.length)); //undefined
console.log(texto.charCodeAt(0)); //69
console.log(texto.indexOf('e')); //3
console.log(texto.indexOf('Este')); //0
console.log(texto.indexOf('x')); //13
console.log(texto.indexOf('X')); //-1
console.log(texto.lastIndexOf('e')); //12
console.log(texto.lastIndexOf('E')); //0
console.log(texto.lastIndexOf('x')); //12
console.log(texto.startsWith('E')); //true
console.log(texto.startsWith('e')); //false
console.log(texto.endsWith('o')); //true
console.log(texto.endsWith('O')); //false
console.log(texto.includes('e')); //true
console.log(texto.includes('W')); //false
console.log(texto.substring(0, 5)); //Este
console.log(texto.substring(0, texto.length)); //Este es un Texto
console.log(texto.substr(0, 5)); //Este
console.log(texto.split(' ')); //["Este", "es", "un", "Texto"]
console.log(texto.split(' ').length); //4
console.log(texto.replace('Texto', 'Texto2')); //Este es un Texto2
console.log(texto.replace('Texto', 'Texto2').length); //16


