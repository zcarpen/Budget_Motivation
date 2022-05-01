
const addTransaction = (expense, data, id) => {
  let newTransactions = [...data, expense];
  return newTransactions;
}

const updateTransaction = (newExpense, data, id) => {
  // find index of id, replace with newExpense
  const index = data.findIndex(expense => expense.id === id);
  const newExpenses = [...data];
  newExpenses[index] = newExpense;
  return newExpenses;

}

const removeTransaction = (data, id) => {
  return data.filter(transaction => transaction.id !== id);
}

const createExpensesObj = (allTransactions) => {
  return allTransactions.reduce((acc, transaction) => {
    acc[transaction.type] = acc[transaction.type] === undefined ? transaction.amount : acc[transaction.type] + transaction.amount;
    return acc
  }, {});
}

const calcTotalExpenses = (allTransactions) => {
  return allTransactions.reduce((acc, transaction) => acc + transaction.amount, 0)
}

const deleteIcon = (icons, type) => {
  return icons.filter(icon => icon !== type);
}

const addIcon = (icons, type) => {
  if (icons.length < 12) {
    icons.push(type);
    return icons
  }
  return icons
}

const calcPercentage = (part, whole) => {
  return Number((part / whole).toFixed(2))
}

module.exports = { addTransaction, updateTransaction, removeTransaction, createExpensesObj, calcTotalExpenses, deleteIcon, addIcon, calcPercentage }



// describe("deleteIcon", () => {
//   it("should delete an icon from icons")
// })


// describe("addIcon", () => {
//   it("should check if number of icons is less than 12")
//   it("should add an icon from icons")
// })

// describe("calcPercentage", () => {
//   it("should return the percentage of a whole to 3 decimal places")
// })

// describe("reCalcTotal", () => {
//   it("should subtract an item from monthly transactions and recalculate total")
// })

// describe("getCompound7", () => {
//   it("should calculate the compound interest for a given amount for 7 iterations")
//   it("should return an array of length 7")
// })