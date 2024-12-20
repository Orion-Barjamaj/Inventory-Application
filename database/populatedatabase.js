const { Client } = require("pg");
require('dotenv').config();

const SQL = `
    CREATE TABLE IF NOT EXISTS genres (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        genrename VARCHAR ( 255 ),
        description TEXT,
        code VARCHAR (255) );
        
    CREATE TABLE IF NOT EXISTS movies ( 
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        genreid TEXT,
        name VARCHAR ( 255 ),
        author VARCHAR ( 255 ),
        description TEXT,        
        rating REAL,
        code VARCHAR (255) );`
;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}
  
main();