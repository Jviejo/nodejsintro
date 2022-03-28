var promesa = function (valor) {
    return new Promise((resolve, reject) => {
        if (valor % 2 == 0) {
            setTimeout(() => {
                resolve('Hola Mundo', valor);
            }, 3000);
        } else {
            reject({
                "error": "el numero no es par",
                "parametros": valor
            });
        }
    });
};

// promesa(11).then(i => {
//     console.log('ok', i)
// }).catch(e => {
//     console.log(e)
// }).finally(() => {
//     console.log("finalmente ")
// })
// try {
//     // open database
//     const resultado1 = await promesa(10);
//     const resultado2 = await promesa(11);
//     const resultado3 = await promesa(14);
//     console.log(resultado1, resultado2)
    
// } catch (error) {
//     console.log(error)
// } finally { 
//     // close database
//     console.log("esto sale siempre");
// }

async function llamarAPromise(valor) {
    return await promesa(valor);
}

console.log(await llamarAPromise(12))
