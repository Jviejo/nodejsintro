
var argumentos = process.argv
console.log(' el parametro de entrada es ', argumentos[2])
var p = function (v) {
    return new Promise((ok, ko) => {
        if (argumentos[2] % 2 == 0)
            setTimeout(() => ok(v * 2), argumentos[3])
        else
            return ko({
                "error":"el numero no es par",
                "parametros":argumentos[2]
            });
    })
};

// p(12).then(i => {
//     console.log('ok', i)
// }).catch(e => {
//     console.log(e)
// }).finally(() => {
//     console.log("finalmente ")
// })

try {
    const v = await p(12)
    console.log('resultado de la promesa', v)
} catch (e) {
    console.log(e, 'el numero es impar')
} finally {
    console.log("esto sale siempre");
}

