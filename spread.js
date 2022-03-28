var array = [1, 2, 3];

var suma3 = function (a, b, c) {
    return a + b + c;
}

console.log(suma3(...array)); // 6

const [a,b,c] = [1,2,3];
console.log(suma3(a, b, c)); // 6

console.log(suma3(array[0], array[1], array[2]));



var array2 = [4, 5, 6, 7];

// no se usa el 7
console.log(suma3(...array2)); // 15

// x = 100 y= 1 z=2 
console.log(suma3(100, ...array)); // 103


var arrayTotal = [...array, ...[15, 16], ...array2, 23];
console.log(arrayTotal); // [ 1, 2, 3, 15, 16, 4, 5, 6, 7, 23 ]


var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23
}

console.log({...objeto}); // Juan Perez 23


let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
console.log(d); // 1970-01-01T00:00:00.000Z

// in objects literal

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
console.log(clonedObj); // { foo: 'bar', x: 42 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

const merge = ( ...objects ) => ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);

// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }