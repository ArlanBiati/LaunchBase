const fs = require('fs')
const data = require('./data.json')


exports.show = function(req, res) {
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor) {

    return id == instructor.id
  })

  if (!foundInstructor) return res.send('Instructor not found !') 

  const instructor = {
    ...foundInstructor,
    age: "",
    services: foundInstructor.services.split(","),
    created_at: ""
  }

  return res.render('instructors/show', { instructor: foundInstructor })
  
}


exports.post = function(req, res) {

  const keys = Object.keys(req.body)

  for ( key of keys) {
    if (req.body[key] == "")
      return res.send('Por favor, preencha todos os campos !')
  }
  
  let { avatar_url, birth, gender, services, name } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro ao gravar arquivo')

    return res.redirect('/instructors')
  })

}