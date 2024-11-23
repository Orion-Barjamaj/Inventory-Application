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
}