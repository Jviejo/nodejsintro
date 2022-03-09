const {
    createHmac,
  } = require('crypto');
  
  const hmac = createHmac('sha256', 'a secret');
  
  hmac.update('some data to hash');
  console.log(hmac.digest('hex'));