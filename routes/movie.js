const express = require("express");
const router = express.Router();
const controller = require("../controllers/movieController");

router.get('/addMovie', controller.get);
router.post('/addMovie', controller.post);
router.get('/movies', controller.getMovies);
router.get('/movies/:id', controller.getMovie);
router.get('/movies/:id/delete', controller.delteMovie);
router.post('/movies/:id/delete', controller.postDelete);

module.exports = router;