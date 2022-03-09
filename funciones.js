function calcularAreaCirculo(radio) {
    var area = Math.PI * radio * radio;
    return area;
}

console.log(calcularAreaCirculo(5)); // 78.5

function longitudCircunferencia(radio) {
    var longitud = 2 * Math.PI * radio;
    return longitud;
}
console.log(longitudCircunferencia(5)); // 31.4
console.log(longitudCircunferencia(10)); // 62.8


const edades = [10, 20, 30, 40, 50];

function mediaEdades(edades) {
    var suma = 0;
    for (let edad of edades) {
        suma += edad;
    }
    var media = suma / edades.length;
    return media;
}
console.log(mediaEdades(edades)); // 30