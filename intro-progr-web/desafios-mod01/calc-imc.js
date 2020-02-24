/* Desafio  - Calculadora de IMC */

// Variaveis para cálculo
const nome = "Arlan Biati"
const altura = 1.70
const peso = 70
const sexo = "M"

// Cálculo do IMC
const imc = peso / (altura * altura)

// Condicões para avaliação de peso
if (!(imc >= 30) && (sexo === 'M')) {
  console.log(`${nome} você não está acima do peso.`)
} else {
  console.log(`${nome} você está acima do peso.`)
}

