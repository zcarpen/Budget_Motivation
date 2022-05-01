
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

const createExpenses = (allTransactions) => {
  return allTransactions.reduce((acc, transaction) => {
    acc[transaction.type] = acc[transaction.type] === undefined ? transaction.amount : acc[transaction.type] + transaction.amount;
    return acc
  }, {});
}
// describe("createExpensesAndCalcTotal", () => {
//   it("should create an object of expenses using the all transactions array on load")
//   it("chould calculate the total expenses for a given month")
// })

module.exports = { addTransaction, updateTransaction, removeTransaction, createExpenses }



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