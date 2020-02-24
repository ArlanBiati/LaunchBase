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

// Imprimindo a mensagem no console do Node -> Arlan Biati tem 24 anos e usa a tecnologia Javascript com especialidade em Web / Mobile.
console.log(`${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade}.`)
