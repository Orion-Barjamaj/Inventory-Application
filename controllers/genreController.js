const query = require("../database/queries");

module.exports = {
    get: (req, res) => {
        res.render("../view/addGenre", {url: req.originalUrl});
    },
    post: (req, res) => {
        query.insertGenre(req.body.genreName, req.body.description);
        res.redirect('/');
    },
    getGenres: async (req, res) => {
        const genres = await query.getGenres();
        res.render("../view/genres", { genres: genres, url: req.originalUrl });
    },
    getGenre: async (req,res) => {
        const getGenre = await query.selectGenre(req.params.id);
        const getMovies = await query.selectMoviesWithGenre(req.params.id);
        const selectedGenre = getGenre[0];
        res.render("../view/genreInfo",  {genre: selectedGenre, url: req.originalUrl, movies: getMovies});
    }
}