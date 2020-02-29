const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(type, value) {

  let transaction = user.transactions.push({
    type: type,
    value: value
  })

  return transaction
}

for (let i = 0; i < user.transactions.length; i++) {
  
}
  

createTransaction("debito", 2000)
createTransaction("credito", 5000)


console.log(user)