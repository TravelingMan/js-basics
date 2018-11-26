/*
This exercise avoids the use of methods.
*/

let myAccount = {
  name: "Bob Bobson",
  expense: 0,
  income: 0
}

let addExpenses = (account, amount) => {
  account.expense += amount
}

let addIncome = (account, amount) => {
  account.income += amount
}

let resetAccount = (account) => {
  account.expense = 0
  account.income = 0
}

let getAccountSummary = (account) => {
  let balance = account.income - account.expense
  return `Account for ${account.name} has $${balance}: income $${account.income}, expenses $${account.expense}`
}

// Running some examples in the node console
addIncome(myAccount, 1000)
addExpenses(myAccount, 100)
console.log("Added some values: " + getAccountSummary(myAccount))

resetAccount(myAccount)
console.log("Reset the account: " + getAccountSummary(myAccount))