// We can create a movie schema & model here

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  director: String,
  duration: String,
  genre: [String],
  rate: String
})

const Movie = mongoose.model("Movie", movieSchema)
// Movie => modelo
// movies => colección. minuscula y plural del modelo.

module.exports = Movie