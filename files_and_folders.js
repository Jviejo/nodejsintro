
const fs = require('fs')
const path = require('path')

const fichero = './files_and_folders/files_and_folders.js'

console.log(path.basename(fichero))
console.log(path.extname(fichero))
console.log(path.dirname(fichero))

console.log(path.resolve(__dirname), __filename)
console.log(path.resolve('.'))

console.log(fs.readdirSync('.'))

const ficheros = fs.readdirSync('.').map(f => path.resolve(f))

console.log(ficheros.map(fichero => fs.statSync(fichero))[0])

const f = fs.createWriteStream('./borrame.txt')
f.write('Hola', 'utf8')
f.write("mundo")
