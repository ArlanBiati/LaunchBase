/* Desafio - Calculadora de Aposentadoria */

// Variaveis para cálculo
const nome = "Arlan Biati"
const sexo = "M"
const idade = 24
const contribuicao = 8

// Condições para avaliação da aposentadoria
if ((contribuicao >= 35 || contribuicao + idade === 95) && sexo === 'M') {
  console.log(`${nome}, você pode se aposentar`)
} else if ((contribuicao >= 30 || contribuicao + idade === 85) && sexo === 'F') {
  console.log(`${nome}, você pode se aposentar`)
} else {
  console.log(`${nome}, você não pode se aposentar`)
}