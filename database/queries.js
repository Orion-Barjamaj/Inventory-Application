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

async function selectGenre(id) {
  const {rows} = await pool.query("SELECT * FROM genres WHERE id = $1;", [id]);
  return rows;
}  

async function selectMoviesWithGenre(id){
  const {rows} = await pool.query("SELECT movies.name, movies.id, genres.genrename AS genre FROM movies JOIN genres ON movies.genreid = genres.genrename WHERE genres.id = $1;", [id]);
  return rows;
}

async function deleteMovie(secretKey) {
  const {results} = await pool.query("DELETE FROM movies WHERE code = $1;", [secretKey]);
  return results;
}

module.exports = {
  insertGenre,
  insertMovie,
  getMovies,
  getGenres,
  selectMovie,
  selectGenre,
  selectMoviesWithGenre,
  deleteMovie
};