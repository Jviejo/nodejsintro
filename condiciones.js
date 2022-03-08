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