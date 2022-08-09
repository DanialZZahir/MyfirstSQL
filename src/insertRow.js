const db = require('../db')

async function main () {
    await db.query('INSERT INTO books VALUES (12345, "The Rave")')
    console.log('row added')
}

main()