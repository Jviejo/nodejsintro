var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var nuevaLista = lista.filter(function (numero) {
    return numero % 2 == 0;
});
console.log(nuevaLista);

var impares = lista.filter((numero) => {
    return numero % 2 != 0;
});
console.log(impares);

var cuadrado = lista.map((numero) => {
    return numero * numero;
});
console.log(cuadrado);

var cuadradoPares = lista.filter((numero) => numero % 2 == 0).map((numero) => {
    return numero * numero;
});
console.log(cuadradoPares);

var suma = lista.reduce((acumulador, numero) => {
    console.log(acumulador, numero);
    return acumulador + numero; 
}, 0)

var sumaCuadradoPares = lista.filter((numero) => numero % 2 == 0)
                             .map((numero) => {return numero * numero;})
                             .reduce((acumulador, numero) => {return acumulador + numero;}, 0);

console.log(sumaCuadradoPares);
