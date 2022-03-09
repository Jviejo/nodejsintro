const { Client } = require('pg')

const client = new Client({
    host: 'pgadmin.jvh.kfs.es',
    port: 5433,
    database: 'postgres',
    user: 'lector',
    password: 'lector',
})

const query = {
    // este nombre sirve para identificar el cache
    name: 'fetch-customer',
    text: 'SELECT * FROM CUSTOMERS WHERE customer_id = $1',

}

client.connect().then(() => {
    query.values = ['ALFKI']
    client.query(query)

        .then(res => console.log(res.rows))
        .catch(e => console.error(e.stack)
        )
})
