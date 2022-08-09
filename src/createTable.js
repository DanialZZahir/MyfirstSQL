const db = require('../db')

async function main (){
    await db.query('CREATE TABLE books (isbn INTEGER, title TEXT)')
    console.log('books table created')
}

main()