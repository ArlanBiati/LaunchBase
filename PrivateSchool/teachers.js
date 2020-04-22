const fs = require('fs')
const data = require ('./data.json')

exports.post = function (req, res) {

  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '')
      return res.send('Por favor, preencha todos os campos.')
  }

    let { url_avatar, name, birth, genre, schooling, typeClass_p, typeClass_a,  subjectTeach } = req.body

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
    typeClass_p,
    typeClass_a,
    subjectTeach,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {

    if (err) return res.send('Erro ao gravas arquivo')

    return res.redirect('/teachers')
  })
}