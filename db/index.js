const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/my-first-db")
.then(() => {
  console.log("servidor conectado a la DB")
})
.catch((error) => {
  console.log(error)
})