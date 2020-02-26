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
      "Javascript",
      "CSS"
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

function checaSeUsuarioUsaCSS(usuario) {
  for (let i = 0; i < usuario.tecnologia.length; i++) {

    if (usuario.tecnologia[i] == "CSS") {
      return true
    } 
  }
  return false
}


for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}