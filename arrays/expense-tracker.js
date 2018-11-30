const account = {
  name: 'Robert Stack',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0

    this.expenses.forEach(expense => {
      totalExpenses += expense.amount
    });

    this.income.forEach(income => {
      totalIncome += income.amount
    })

    return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income, $${totalExpenses} in expenses.`
  }
}

// - Add income array
// - addIncome method -> (description, amount)
// - Tweak getAccountSummary
//   - NAME has a balance of $10. $100 in income, $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())