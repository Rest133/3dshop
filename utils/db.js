require('dotenv').config()
const {Client} = require('pg')

const clientConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.db_password,
}

function createConnectionToDB() {
    const client = new Client(clientConfig)
    client.connect(err=>{
        if(err){
            console.log(`Error can't connect to db: ${err}`)
        }
        else console.log(`Connected to database`)
    })
}


module.exports = {
    createConnectionToDB
}
