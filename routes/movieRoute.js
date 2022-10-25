const express = require("express");
const movieController = require("../controllers/movieControllers");
const router = express.Router();

router.get("/", movieController.getHome);

router.get("/add-movie", movieController.getAddMovie);

router.post("/add-movie", movieController.addMovie);

router.post("/delete-movie", movieController.deleteMovie);
module.exports = router;
