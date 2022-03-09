// definición de un array
const numbers = [45, 4, 9, 16, 25];

// recorrido de un array con un for
for (let x in numbers) {
  console.log(x, numbers[x]);
}

// recorrido de un array con un for
for (let x of numbers) {
    console.log(x);
}

// usando el indice
for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i, v)
  }

