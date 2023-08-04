// aqui config del dotenv
require('dotenv').config()

// Connects to the database... if we had one :(
require("./db/index.js")

// Handles http requests (express is node js framework)
const express = require('express');
const app = express();

// Handles the handlebars
const hbs = require("hbs");

// This part runs most pieces of middleware
app.use(express.static("public"))
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/' )
const morgan = require("morgan")
app.use(morgan("dev"))
const favicon = require("serve-favicon")
app.use(favicon(__dirname + "/public/images/favicon.ico"))


// Local Variables 
// TODO           

// 👇 Start handling routes here
const indexRouter = require("./routes/index.routes.js")
app.use("/", indexRouter)

// To handle errors.
const errorHandling = require("./error-handlers/index.js")
errorHandling(app)

module.exports = app;
