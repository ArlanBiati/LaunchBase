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

server.get('/recipe/:index', function(req, res) {

  const recipeIndex = req.params.index

  res.render('recipe', { recipe: recipe[recipeIndex] })
})

server.use(function(req, res) {
  res.status(404).render('not-found');
})


server.listen(3333, function () {
  console.log('Server Runing')
})