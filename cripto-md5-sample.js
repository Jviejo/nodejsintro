var crypto = require('crypto');
var name = 'Borrame';
var hash = crypto.createHash('md5').update(name).digest('hex');
console.log(hash, hash.length); // 40be4e59b9a2a2b5dffb918c0e86b3d7

