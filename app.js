require('dotenv').config();
const express = require('express');
const app = express();
const path = require("node:path");
const port = process.env.PORT || 5432;

// Connect to database

const { Pool } = require('pg');
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const pool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: port,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
});


async function getPgVersion() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT version()');
        console.log(result.rows[0]);
    } finally {
        client.release();
    } 
}

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection error:', err.stack));

getPgVersion();

// Rest of app

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src/images'));
app.use(express.static(__dirname + '/src/'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const homeroute = require("./routes/homeRoute"); 
const genre = require("./routes/genre"); 
const movie = require("./routes/movie"); 

app.use('/', homeroute);
app.use('/', genre);
app.use('/', movie);

app.listen(port, () => console.log("Connected at", port))