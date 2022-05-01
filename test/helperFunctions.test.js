const { addTransaction, removeTransaction, updateTransaction, createExpensesObj, calcTotalExpenses } = require('../src/helperFunctions.js');

const data =
{
  username: 'zcarpen',
  icons: ['other', 'coffee', 'grocery', 'gas', 'eat-out', 'movie', 'music', 'house', 'gifts', 'snack', 'games', 'self-care'],
  monthlyIncome: 5500,
  monthlyBudget: 3800,
  totalSpent: 1120.00,
  expenses: {
    other: 10,
    coffee: 100,
    grocery: 300,
    gas: 100,
    eatOut: 100,
    movie: 50,
    music: 50,
    house: 150,
    gifts: 30,
    snack: 30,
    games: 50,
    selfCare: 150
  },
  deleteIcon: false,
  addIcon: false,
  allTransactions: [
    { id: 1, type: 'other', amount: 10, time: 'someTime' },
    { id: 2, type: 'coffee', amount: 100, time: 'someTime' },
    { id: 3, type: 'grocery', amount: 300, time: 'someTime' },
    { id: 4, type: 'gas', amount: 100, time: 'someTime' },
    { id: 5, type: 'eatOut', amount: 100, time: 'someTime' },
    { id: 6, type: 'movie', amount: 50, time: 'someTime' },
    { id: 7, type: 'music', amount: 50, time: 'someTime' },
    { id: 8, type: 'house', amount: 150, time: 'someTime' },
    { id: 9, type: 'gifts', amount: 30, time: 'someTime' },
    { id: 10, type: 'snack', amount: 30, time: 'someTime' },
    { id: 11, type: 'games', amount: 50, time: 'someTime' },
    { id: 12, type: 'selfCare', amount: 150, time: 'someTime' }
  ],
  InvestmentMotivator: false,
  expenseChart: false,
}



describe("addTransaction", () => {

  it("should return an updated version of allTransactions when expense is added", () => {
    const newTransactions = addTransaction({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions)
    const testTransactions = [...data.allTransactions];
    testTransactions.push({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' })
    expect(newTransactions).toEqual(testTransactions)
  })

  it("should return allTransactions with length increased by 1", () => {
    const newTransactions = addTransaction({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions)
    expect(newTransactions.length).toBe(data.allTransactions.length + 1)
  })

  it("should contain the added object within newTransations", () => {
    const newTransactions = addTransaction({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions)
    expect(newTransactions.find(expense => expense.id === 13)).toBeTruthy()
  })



})

describe("removeTransaction", () => {

  it("should return an updated version of allTransactions when expense is removed", () => {
    const newTransactions = removeTransaction(data.allTransactions, 12)
    expect([...newTransactions, { id: 12, type: 'selfCare', amount: 150, time: 'someTime' }]).toEqual(data.allTransactions)
  })

  it("should return allTransactions with length decreased by 1", () => {
    const newTransactions = removeTransaction(data.allTransactions, 12)
    expect(newTransactions.length).toBe(data.allTransactions.length - 1)
  })

  it("should not contain the added object within newTransactions", () => {
    const newTransactions = removeTransaction(data.allTransactions, 12)
    expect(newTransactions.find(expense => expense.id === 12)).toBeFalsy()
  })
})

describe("updateTransaction", () => {

  it("should return an updated version of allTransactions that is diffferent than previous version", () => {
    const newTransactions = updateTransaction({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions, 12)
    expect(newTransactions).not.toEqual(data.allTransactions)
  })

  it("should return allTransactions with same length", () => {
    const newTransactions = updateTransaction({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions, 12)
    expect(newTransactions.length).toBe(data.allTransactions.length)
  })

  it("should return an updated version of allTransactions where expense is updated properly", () => {
    const newTransactions = updateTransaction({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions, 12)
    expect({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }).toEqual(newTransactions.find(expense => expense.id === 12))
  })
})


describe("createExpensesObj", () => {
  it("should create an object of expenses using the allTransactions array on load", () => {
    const expensesObj = createExpensesObj(data.allTransactions);
    expect(expensesObj).toEqual(data.expenses);
  })

  it("should create an object of expenses that totals to be the same as allTransactions", () => {
    const expensesObj = createExpensesObj(data.allTransactions);
    const totalExpenses = Object.entries(expensesObj).reduce((acc, [expense, cost]) => acc + cost, 0);
    let total = 0
    data.allTransactions.forEach(transaction => total = total + transaction.amount)
    expect(totalExpenses).toBe(total);
  })
})

describe("calcTotalExpenses", () => {
  it("should calculate the total expenses for a given month", () => {
    const totalExpenses = calcTotalExpenses(data.allTransactions)
    let total = 0
    data.allTransactions.forEach(transaction => total = total + transaction.amount)
    expect(totalExpenses).toBe(total);
  })

  it("should return 0 if the total expenses for a given month are empty", () => {
    const totalExpenses = calcTotalExpenses([])
    expect(totalExpenses).toBe(0);
  })
})


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

// describe("toggleTransaction", () => {
//   it("should subtract an item from monthly transactions")
// })

// describe("getCompound7", () => {
//   it("should calculate the compound interest for a given amount for 7 iterations")
//   it("should return an array of length 7")
// })
