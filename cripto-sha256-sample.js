var crypto = require('crypto');
var name = 'welcome';
var hash = crypto.createHash('sha256').update(name).digest('hex');
console.log(hash, `string de =  ${hash.length} bytes= ${hash.length / 2} bits = ${hash.length / 2 * 8} ` ); // 

