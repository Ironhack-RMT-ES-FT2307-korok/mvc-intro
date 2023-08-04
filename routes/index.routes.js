const express = require("express")
const router = express.Router()

const Movie = require("../models/Movie.model.js")

router.get('/', (req, res, next) => {
  res.render("home.hbs")
})

router.get('/about', (req, res, next) => {
  // console.log(process.env.CLAVE_SUPER_SECRETA)
  res.render("about.hbs", {
    claveSecreta: process.env.CLAVE_SUPER_SECRETA
  })
})

router.get('/movies', (req, res, next) => {
  Movie.find() // busca todo en esta colección
  .then((response) => {
    // console.log(response)
    res.render("movies.hbs", {
      allMovies: response
    })
  })
  .catch((error) => {
    // console.log(error)
    // ve al gestor de errores de tipo 500
    next(error) // express entiende, ok, tengo que ir al app.use de tipo 500 y pasar el error
  })
})

module.exports = router