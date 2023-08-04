function errorHandling(app) {
  // 404 Not found
  app.use((req, res, next) => {
    res.status(404).render("not-found.hbs")
  })
  
  // 500 Errors => express sabe que es el middleware 500 porque tiene 4 arguments
  app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).render("error.hbs")
  })

}

module.exports = errorHandling