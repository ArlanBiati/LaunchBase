const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(type, value) {
  user.transactions.push({
    type: type,
    value: value
  })

  if (type == "credit") {
    user.balance = user.balance + value
  } else {
    user.balance = user.balance - value
  }

}

/* Está função eu criei, porem não funcionou. Estou tentando entender o motivo ainda. 
function createTransaction(type, value) {

  user.transactions.push({
    type: type,
    value: value
  })

  for (let i = 0; i < user.transactions.length; i++) {

    if (user.transactions[i].type !== "credit") {
      return user.balance -= user.transactions[i].value
    } else {
      return user.balance += user.transactions[i].value
    }
  }
}

createTransaction("credit", 300)
createTransaction("credit", 500)
createTransaction("debit", 200)

console.log(user)
*/

function getHigherTransactionByType(type) {

  let higherValue = 0
  let higherTransaction
  for (let i = 0; i < user.transactions.length; i++) {

    if ((type == user.transactions[i].type) && (user.transactions[i].value > higherValue)) {
      higherValue = user.transactions[i].value
      higherTransaction = user.transactions[i]
    }
  }
  return higherTransaction
}

function getAverageTransactionValue() {
  let average = 0
  for (let i = 0; i < user.transactions.length; i++) {
    average = (average + (user.transactions[i].value))
  }
  return average / user.transactions.length
}

function getTransactionsCount() {
  let count = {
    credit: 0,
    debit: 0
  }
  for (let i = 0; i < user.transactions.length; i++) {
    if (user.transactions[i].type === 'credit') {
      count.credit++
    } else {
      count.debit++
    }
  }
  return count
}

createTransaction('credit', 50)
createTransaction('credit', 120)
createTransaction('debit', 80)
createTransaction('debit', 30)

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())