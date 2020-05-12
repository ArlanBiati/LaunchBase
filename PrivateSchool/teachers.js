const fs = require('fs')
const data = require ('./data.json')
const Intl = require('intl')
const { age, date, educationLevelFormat } = require('./utils')

exports.show = function (req, res) {

  const { id } = req.params

  const foundTeacher = data.teachers.find(function (teacher){

    return teacher.id == id
  })

  if (!foundTeacher) res.send ('Not found teacher !')

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    schooling: educationLevelFormat(foundTeacher.schooling),
    subjectTeachs: foundTeacher.subjectTeachs.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
  }

  return res.render("teachers/show", { teacher })
}


exports.post = function (req, res) {

  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '')
      return res.send('Por favor, preencha todos os campos.')
  }

    let { url_avatar, name, birth, genre, schooling, typeClass,  subjectTeachs } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.teachers.length + 1)

  data.teachers.push ({
    id,
    url_avatar,
    name,
    birth,
    genre,
    schooling,
    typeClass,
    subjectTeachs,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {

    if (err) return res.send('Erro ao gravas arquivo')

    return res.redirect('/teachers')
  })
}


exports.edit = function (req, res) {

  const { id } = req.params

  const foundTeacher = data.teachers.find(function (teacher) {

    return teacher.id == id
  })

  if (!foundTeacher) res.send ('Not found teacher !')

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth)
  }

  return res.render('teachers/edit', { teacher })

}


exports.put = function (req, res) {

  const { id } = req.body
  let index = 0

  const foundTeacher = data.teachers.find(function (teacher, foundIndex){

    if (teacher.id == id) {
      index == foundIndex
      return true
    }
  })

  if (!foundTeacher) res.send ('Not found teacher !')

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth)
  }

  data.teachers[index] = teacher

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Write error !')

    return res.redirect(`/teachers/${id}`)

  })
}