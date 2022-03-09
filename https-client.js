const axios = require('axios');

async function getUsuarios() {
   const res = await axios.get('https://jsonplaceholder.typicode.com/users')
   return res;
}

(async () => {
    resultado = await getUsuarios();

    console.log(JSON.stringify(resultado.data));
})();