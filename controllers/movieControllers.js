const MovieModal = require("../models/movieModel");

exports.getHome = (req, res, next) => {
  MovieModal.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("home", {
        movieData: rows,
        pageTitle: "home",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddMovie = (req, res, next) => {
  res.render("addMovie", {
    pageTitle: "home",
    path: "/add-movie",
  });
};

exports.addMovie = (req, res, next) => {
  const name = req.body.name;
  const imageurl = req.body.imageUrl;
  const des = req.body.description;

  const movie = new MovieModal(null, name, imageurl, des);
  movie
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteMovie = (req, res, next) => {
  const movieId = req.body.movieId;
  MovieModal.deleteById(movieId)
    .then(res.redirect("/"))
    .catch((err) => {
      console.log(err);
    });
};
