const { Client } = require('pg')


const client = new Client({
    host: 'pgadmin.jvh.kfs.es',
    port: 5433,
    database: 'postgres',
    user: 'lector',
    password: 'lector',
})

const query = async () => {
    await client.connect()
    const res = await client.query('SELECT * from customers', [])
    console.log(res.rows[0]) // nos los trae todos pero solo imprime el primero
    await client.end()
}

const query2 = async () => {
    await client.connect()
    const res = await client.query('SELECT * from customers where customer_id = $1', ['ALFKI'])
    console.log(res.rows[0]) // nos los trae todos pero solo imprime el primero
    await client.end()
}



(async () => {
    await query2()
})()