const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

/* jeito um de fazer


function calculaSaldo (usuarios) {
  
  let somaReceitas = 0
  for (let i = 0; i < usuarios.receitas.length; i++) {

    somaReceitas = somaReceitas + usuarios.receitas[i]
  }

  let somaDespesas = 0
  for (let i = 0; i < usuarios.despesas.length; i++) {

    somaDespesas = somaDespesas + usuarios.despesas[i]
  }
  return (somaReceitas - somaDespesas)
}

function imprimeSaldo () {
  for (let i = 0; i < usuarios.length; i++) {
    let saldo = calculaSaldo(usuarios[i]).toFixed(2)
    if (saldo < 0) {
      console.log(`${usuarios[i].nome} tem um saldo NEGATIVO de R$: ${saldo}`)
    } else {
      console.log(`${usuarios[i].nome} tem um saldo POSITIVO de R$: ${saldo}`)
    }
  }
}
imprimeSaldo()


Jeito dois de fazer               */

function calculaSaldo(receitas, despesas) {

  let somaReceita = somaNumero(receitas)
  let somaDespesas = somaNumero(despesas)

  let saldo = (somaReceita - somaDespesas)
  return saldo
}

function somaNumero(numero) {
  let soma = 0
  for (let i = 0; i < numero.length; i++) {
    soma += numero[i]
  }
  return soma
}

function imprimeSaldo() {
  for (let i = 0; i < usuarios.length; i++) {
    let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas).toFixed(2)
    if (saldo < 0) {
      console.log(`${usuarios[i].nome} tem um saldo NEGATIVO de R$: ${saldo}`)
    } else {
      console.log(`${usuarios[i].nome} tem um saldo POSITIVO de R$: ${saldo}`)
    }
  }
}

imprimeSaldo() 