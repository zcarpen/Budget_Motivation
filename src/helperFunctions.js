
export const addTransaction = (expense, data, id) => {
  let newTransactions = [...data, expense];
  return newTransactions;
}

export const updateTransaction = (newExpense, data, id) => {
  // find index of id, replace with newExpense
  const index = data.findIndex(expense => expense.id === id);
  const newExpenses = [...data];
  newExpenses[index] = newExpense;
  return newExpenses;

}

export const removeTransaction = (data, id) => {
  return data.filter(transaction => transaction.id !== id);
}

export const createExpensesObj = (allTransactions) => {
  return allTransactions.reduce((acc, transaction) => {
    acc[transaction.type] = acc[transaction.type] === undefined ? transaction.amount : acc[transaction.type] + transaction.amount;
    return acc
  }, {});
}

export const calcTotalExpenses = (allTransactions) => {
  return allTransactions.reduce((acc, transaction) => acc + transaction.amount, 0)
}

export const deleteIcon = (icons, type) => {
  return icons.filter(icon => icon !== type);
}

export const addIcon = (icons, type) => {
  if (icons.length < 12) {
    icons.push(type);
    return icons
  }
  return icons
}

export const calcPercentage = (part, whole) => {
  return Number((part / whole).toFixed(2))
}

export const toggleTransaction = (arrayOfToggledExpenseTypes, expenseType) => {
  const newArrayOfToggledExpenses = [...arrayOfToggledExpenseTypes]
  if (arrayOfToggledExpenseTypes.findIndex(type => type === expenseType) === -1) {
    newArrayOfToggledExpenses.push(expenseType)
    return newArrayOfToggledExpenses;
  }
  return arrayOfToggledExpenseTypes.filter(expense => expense !== expenseType)
}

export const calcToggledTransactions = (listOfTypesToToggle, allTransactions) => {
  return allTransactions.reduce((acc, transaction) => {
    if (!listOfTypesToToggle.includes(transaction.type)) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0)
}

export const getContinuousInterest = (initialInvestment, interestRate = .1, time = 1) => {
  if (initialInvestment <= 0) return 0;
  return Number((initialInvestment * Math.pow(Math.E, (interestRate * time))).toFixed(2));
}

export const getContinuousInterest7 = (initialInvestment, time = 7) => {
  const investmentByYear = [];
  investmentByYear.push(initialInvestment);
  while (time > 0) {
    investmentByYear.push(getContinuousInterest(investmentByYear[investmentByYear.length - 1]));
    time--;
  }
  return investmentByYear;
}


// describe("getCompound7", () => {
//   it("should calculate the compound interest for a given amount for 7 iterations")
//   it("should return an array of length 7")
// })
// module.exports = { addTransaction, updateTransaction, removeTransaction, createExpensesObj, calcTotalExpenses, deleteIcon, addIcon, calcPercentage, toggleTransaction, calcToggledTransactions, getContinuousInterest, getContinuousInterest7 }




