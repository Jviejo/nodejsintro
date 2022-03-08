var radio = 10
const PI = Math.PI

console.log(2 * PI * radio) // diametro 62.83185307179586
console.log(PI * radio * radio) // area 61.73469387755101
console.log(Math.pow(radio, 2) * PI) // area 61.73469387755101
console.log(Math.pow(radio, 2) * Math.PI) // area 61.73469387755101

console.log(Math.sqrt(100)) // 10
console.log(Math.round(100.5)) // 101
console.log(Math.round(100.4)) // 100
console.log(Math.ceil(100.4)) // 101
console.log(Math.floor(100.4)) // 100
console.log(Math.abs(-100.4)) // 100.4
console.log(Math.abs(100.4)) // 100.4
console.log(Math.min(100, 200, 300)) // 100
console.log(Math.max(100, 200, 300)) // 300
console.log(Math.random()) // 0.98828778971629
console.log(Math.random() * 10) // 9.98828778971629
console.log(Math.floor(Math.random() * 10)) // entre 0 y 9
console.log(Math.floor(Math.random() * 10) + 1) // entre 1y 10
console.log(Math.log(Math.E)) // 1
console.log(Math.log(Math.E * Math.E)) // 2
console.log(Math.log(Math.E * Math.E * Math.E)) // 3
console.log(Math.log10(1000)) // 3
console.log(Math.log2(4)) // 9


// condiciones
var a = 1
var b = 2

if (a == b) {
    console.log('a == b')
} else {
    console.log('a != b')
}

if (a > b) {
    console.log('a > b')
} else {
    console.log('a <= b')
}

if (a >= b) {
    console.log('a >= b')
} else {
    console.log('a < b')
}

if (a < b) {
    console.log('a < b')
} else {
    console.log('a >= b')
}

if (a != b) {
    console.log('a != b')
} else {
    console.log('a == b')
}

if (a <= b && a > 0) {
    console.log('a <= b && a > 0')
} else {
    console.log('al menos una condicion no se cumple')
}

if (a <= b || a > 0) {
    console.log('se cumple alguna condicion', a, b)
} else {
    console.log('no se cumple ninguna condicion')
}

if (!(a <= b)) { // es equivalete a a > b
    console.log('se cumple que a > b')
} else {
    console.log('no se cumple')
}