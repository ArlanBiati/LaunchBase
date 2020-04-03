const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const recipes = require('./recipes')
const recipe = require('./recipe')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res) {
  res.render('home', {recipes})
})

server.get('/about', function(req, res) {
  res.render('about')
})

server.get('/recipe/:id', function(req, res) {

  const recipeId = req.params.id

  res.render('recipe', { recipe: recipe[recipeId] })
})

server.use(function(req, res) {
  res.status(404).render('not-found');
})


server.listen(3333, function () {
  console.log('Server Runing')
})