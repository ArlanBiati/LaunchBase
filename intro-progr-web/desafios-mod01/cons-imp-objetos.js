// Desafio - Construção e Impressão de Objetos


// Declaração da constante empresa em forma de objeto, contendo todos os dados mais especificos.
const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
};

// Imprimindo a mensagem no console do Node -> A empresa Rocketseat está localizada na Rua Guilherme Gembala, número 260
console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereco.rua}, número ${empresa.endereco.numero}`)