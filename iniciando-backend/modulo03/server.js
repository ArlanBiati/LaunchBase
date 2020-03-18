const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function (req, res) {

  const about = {

    avatar_url:"https://avatars0.githubusercontent.com/u/43690080?s=460&v=4",
    name: "Arlan Biati",
    role: "Desenvolvedor web FullStack",
    description: "Programador Full-Stack, focado em trazer as    melhores interfaces para o cliente. Apaixonado pela linguagem Javascript e entusiasta de todo seu ecossistema",
    links: [
      {name: "Github", url: "https://github.com/ArlanBiati"},
      {name: "Instagram", url: "https://www.instagram.com/arlangbiati/"},
      {name: "Facebook", url: "https://www.facebook.com/arlan.biati"},
      {name: "LinkedIn", url: "https://www.linkedin.com/in/arlan-biati-2b3512115/"}
    ]

  }

  return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {

  return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {
  const id = req.query.id

  const video = videos.find(function (video) {
    return video.id == id
  })

  if (!video) {
    return res.send("Video not found.")
  }

  return res.render("video", {item: video})
})

server.listen(5000, function () {
  console.log('server is running')
})