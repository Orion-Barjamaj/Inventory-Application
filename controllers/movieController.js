const query = require("../database/queries");

module.exports = {
    get: async (req, res) => {
        const genres = await query.getGenres();
        res.render("../view/addMovie", {url: req.originalUrl, genres: genres});
    },
    post: (req, res) => {
        console.log(req.body);
        const { genreid, moviename, director, desc, rate, secretKey } = req.body;
        query.insertMovie(genreid, moviename, director, desc, rate, secretKey);
        res.redirect('/');
    },
    getMovies: async (req, res) => {
        const movies = await query.getMovies();
        res.render("../view/movies", {movies: movies, url: req.originalUrl});
    },
    getMovie: async (req, res) => {
        const getMovie = await query.selectMovie(req.params.id);
        const selectedMovie = getMovie[0];
        res.render("../view/movieInfo", {movies: selectedMovie, url: req.originalUrl});
    }
}