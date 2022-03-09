const calcularAreaCirculo = (radio) => {
    var area = Math.PI * radio * radio;
    return area;
}

const calcularAreaCirculo2 = (radio) => Math.PI * radio * radio;

console.log('area del circulo', calcularAreaCirculo(10));   // area del circulo 314.1592653589793

