// Desafio - Arrays e Objetos

// Declaração da contante como um objeto contendo infs sobre o dev.
const dev = {
  nome: "Arlan Biati",
  idade: 24,

  // Declaração do array TECNOLOGIAS, contendo objetos com nome da linguagem e especialidade
  tecnologias: [
    {
      nome: 'Javascript',
      especialidade: 'Web / Mobile'
    },
    {
      nome: 'Python',
      especialidade: 'Data Science'
    },
    {
      nome: 'C++',
      especialidade: 'Desktop'
    }
  ]
}

console.log(`O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade}.`)
