const pool = require("./pool");

async function insertGenre(name, desc, secretCode) {
  await pool.query("INSERT INTO genres (genrename, description, code) VALUES ($1, $2, $3)", [name, desc, secretCode]);
}

async function insertMovie(genreid, name, author, description, rating, secretCode) {
  await pool.query("INSERT INTO movies (genreid, name, author, description, rating, code) VALUES ($1, $2, $3, $4, $5, $6)", [genreid, name, author, description, rating, secretCode]);
}  

async function getMovies() {
  const {rows} = await pool.query("SELECT * FROM movies;");
  return rows;
}   

async function getGenres() {
  const {rows} = await pool.query("SELECT * FROM genres;");
  return rows;
}  

async function selectMovie(id) {
  const {rows} = await pool.query("SELECT * FROM movies WHERE id = $1;", [id]);
  return rows;
}  

module.exports = {
  insertGenre,
  insertMovie,
  getMovies,
  getGenres,
  selectMovie,
};