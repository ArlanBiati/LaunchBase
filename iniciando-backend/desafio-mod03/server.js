const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const about = require("./about")
const courses = require("./courses")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", function (req, res) {

  res.render("courses", {courses})
  
  server.use(function (req, res) {
    res.status(404).render("not-found");
  });
})

server.get("/about", function (res, req) {

  req.render("about", {about})

  server.use(function (req, res) {
    res.status(404).render("not-found");
  });
})

server.listen(5000, function () {
  console.log('server runing')
})
