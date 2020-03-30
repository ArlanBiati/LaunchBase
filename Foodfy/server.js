const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const recipes = require('./recipes')
const data = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res) {
  res.render('index', {recipes})

  server.use(function(req, res) {
    res.status(404).render('not-found');
  })
})

server.get('/about', function(req, res) {
  res.render('about')

  server.use(function(req, res) {
    res.status(404).render('not-found');
  })
})

server.get('/recipes', function(req, res) {
  res.render('recipes', {data})

  server.use(function(req, res) {
    res.status(404).render('not-found');
  })
})


server.listen(3333, function () {
  console.log('Server Runing')
})