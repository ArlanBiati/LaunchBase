const express = require('express')

const routes = express.Router()

routes.get('/', function(req, res) {
  return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res) {
  return res.render('teachers/index')
})

routes.get('/teachers/create', function(req, res) {
  return res.render('teachers/create')
})

routes.get('/students', function(req, res) {
  return res.send('students')
})

module.exports = routes