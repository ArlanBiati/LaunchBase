const usuarios = [
  
  {
    nome: "Arlan Biati",
    tecnologia: [
      "HTML", 
      "CSS"
    ]
  },

  {
    nome: "Mayk Brito",
    tecnologia: [
      "HTML", 
      "Javascript"
    ]
  },

  {
    nome: "Diego Fernandes",
    tecnologia: [
      "ReactJS", 
      "React Native"
    ]
  }
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologia[0]}, ${usuarios[i].tecnologia[1]}`)
}
