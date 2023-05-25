const express = require("express");

const moviesController = require("../../controllers/movies-controller");

const {schemas} = require("../../models/movie");

const {validateBody} = require("../../utils");

const {authenticate, isValidId} = require("../../middlewares");

const router = express.Router();

// router.use(authenticate);

router.get("/", moviesController.getAll);

router.get("/:id", moviesController.getById);

// router.post("/", validateBody(schemas.movieAddSchema), moviesControllers.addMovie);

// router.put("/:id", isValidId, validateBody(schemas.movieAddSchema), moviesControllers.updateMovieById);

// router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteMovieSchema), moviesControllers.updateMovieFavorite)

// router.delete("/:id", isValidId, moviesControllers.deleteMovieById);

module.exports = router;