const express = require("express");
const router = express.Router();
const controller = require("../controllers/genreController");

router.get('/createGenre', controller.get);
router.post('/createGenre', controller.post);
router.get('/genres', controller.getGenres);

module.exports = router;