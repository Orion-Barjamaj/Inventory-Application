module.exports = {
    get: (req, res) => {
        res.render("../view/index", {url: req.originalUrl});
    }
}