// numeros del 1 al 10
for (var i = 0 ; i < 10 ; i++) {
    console.log(i);
}
// numeros del 10 al 1
for (var i = 10 ; i > 0 ; i--) {
    console.log(i);
}
// numeros del 1 al 10 con saltos de 2
for (var i = 0 ; i < 10 ; i += 2) {
    console.log(i);
}
// numeros del 10 al 1 con saltos de 2
for (var i = 10 ; i > 0 ; i -= 2) {
    console.log(i);
}

// otra manera de hacer los numeros pares
for (var i = 0 ; i < 10 ; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// del 1 al 10 con while
var a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}
// del 10 al 1 con while
var a = 10;
while (a > 0) {
    console.log(a);
    a--;
}

