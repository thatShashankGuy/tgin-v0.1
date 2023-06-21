import { Client } from 'pg'

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'mydb',
    user: process.env.USER,
    password: process.env.PASS,
  })
async function connect(query : string ){
    await client.connect()
    const res = await client.query(query)

    await client.end()
    return res
}

export default connect

