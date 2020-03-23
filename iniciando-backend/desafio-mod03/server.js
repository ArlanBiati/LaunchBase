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


server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  const course = courses.find(function(course) {
    return course.id == id
  })

  if(!course) {
    return res.send("Video Not Found")
  }

  return res.render("course", { course });
});



server.get("/about", function (req, res) {

  res.render("about", {about})

  server.use(function (req, res) {
    res.status(404).render("not-found");
  });
})

server.listen(5000, function () {
  console.log('server runing')
})
