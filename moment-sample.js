var moment = require('moment');
var ahora = moment.now();
var ahoraMasUnDia = moment(ahora).add(1, 'days');
console.log('ahora', ahora.toString());
console.log('ahora mas un dia', ahoraMasUnDia.toString());