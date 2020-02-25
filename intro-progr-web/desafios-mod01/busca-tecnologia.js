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
  for (let i = 0; i < usuarios.length; i++) {

    if (usuarios[i].tecnologia == "CSS") {
      usuario = true;
    } else {
      usuario = false;
    }
  }
  return usuario
}

const usuario = checaSeUsuarioUsaCSS()

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
  }
}