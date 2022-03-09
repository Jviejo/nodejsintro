const { Client } = require('pg')


const client = new Client({
    host: 'pgadmin.jvh.kfs.es',
    port: 5433,
    database: 'postgres',
    user: 'lector',
    password: 'lector',
})

client.connect().then(() => {
    client.query('SELECT $1::text as message', ['Hello world11!']).then(res => {
        console.log(res.rows[0].message) // Hello world!
        client.end()
    })
})
