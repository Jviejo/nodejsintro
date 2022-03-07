import fetch  from 'node-fetch';

(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
      // resultado de la query. res.status == 200 si todo salio bien
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);
  
      const users = await res.json();
      // bucle que recorre el array de usuarios
      for(var user of users) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
      }
    } catch (err) {
      console.log(err.message); //can be console.error
    }
  })();