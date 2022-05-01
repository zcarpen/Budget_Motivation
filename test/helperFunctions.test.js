const { addTransaction, removeTransaction, updateTransaction, createExpensesObj, calcTotalExpenses, deleteIcon, addIcon, calcPercentage, toggleTransaction, calcToggledTransactions, getContinuousInterest, getContinuousInterest7 } = require('../src/helperFunctions.js');

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
  toggleList: [],
  InvestmentMotivator: false,
  expenseChart: false,
}



describe("addTransaction", () => {

  it("should return an updated version of allTransactions when expense is added", () => {
    const newTransactions = addTransaction({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions);
    const testTransactions = [...data.allTransactions];
    testTransactions.push({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' });
    expect(newTransactions).toEqual(testTransactions);
  })

  it("should return allTransactions with length increased by 1", () => {
    const newTransactions = addTransaction({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions);
    expect(newTransactions.length).toBe(data.allTransactions.length + 1);
  })

  it("should contain the added object within newTransations", () => {
    const newTransactions = addTransaction({ id: 13, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions);
    expect(newTransactions.find(expense => expense.id === 13)).toBeTruthy();
  })



})

describe("removeTransaction", () => {

  it("should return an updated version of allTransactions when expense is removed", () => {
    const newTransactions = removeTransaction(data.allTransactions, 12);
    expect([...newTransactions, { id: 12, type: 'selfCare', amount: 150, time: 'someTime' }]).toEqual(data.allTransactions);
  })

  it("should return allTransactions with length decreased by 1", () => {
    const newTransactions = removeTransaction(data.allTransactions, 12);
    expect(newTransactions.length).toBe(data.allTransactions.length - 1);
  })

  it("should not contain the added object within newTransactions", () => {
    const newTransactions = removeTransaction(data.allTransactions, 12);
    expect(newTransactions.find(expense => expense.id === 12)).toBeFalsy();
  })
})

describe("updateTransaction", () => {

  it("should return an updated version of allTransactions that is diffferent than previous version", () => {
    const newTransactions = updateTransaction({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions, 12);;
    expect(newTransactions).not.toEqual(data.allTransactions);;
  })

  it("should return allTransactions with same length", () => {
    const newTransactions = updateTransaction({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions, 12);;
    expect(newTransactions.length).toBe(data.allTransactions.length);;
  })

  it("should return an updated version of allTransactions where expense is updated properly", () => {
    const newTransactions = updateTransaction({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }, data.allTransactions, 12);;
    expect({ id: 12, type: 'selfCare', amount: 50, time: 'someTime' }).toEqual(newTransactions.find(expense => expense.id === 12));;
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
    let total = 0;;
    data.allTransactions.forEach(transaction => total = total + transaction.amount);;
    expect(totalExpenses).toBe(total);
  })
})

describe("calcTotalExpenses", () => {
  it("should calculate the total expenses for a given month", () => {
    const totalExpenses = calcTotalExpenses(data.allTransactions);
    let total = 0;
    data.allTransactions.forEach(transaction => total = total + transaction.amount);
    expect(totalExpenses).toBe(total);
  })

  it("should return 0 if the total expenses for a given month are empty", () => {
    const totalExpenses = calcTotalExpenses([]);
    expect(totalExpenses).toBe(0);
  })
})


describe("deleteIcon", () => {
  it("should delete an icon from icons", () => {
    const iconsCopy = [...data.icons];
    const iconRemoved = deleteIcon(iconsCopy, 'coffee');
    const indexToDelete = data.icons.findIndex(icon => icon === 'coffee');
    const newIconsArray = data.icons.slice(0, indexToDelete).concat(data.icons.slice(indexToDelete + 1));
    expect(iconRemoved).toEqual(newIconsArray);
  })

  it("should have length that is one less than previous icons array", () => {
    const iconsCopy = [...data.icons];
    const iconRemoved = deleteIcon(iconsCopy, 'coffee');
    expect(iconRemoved.length).toBe(data.icons.length - 1);
  })
})


describe("addIcon", () => {
  it("should return prevState of icons if number of icons is not less than 12", () => {
    expect(addIcon(data.icons, 'appleSauce')).toEqual(data.icons);
  })

  it("should add an icon from icons", () => {
    const testIcons = data.icons.slice(0, data.icons.length - 1);
    const testSolution = [...data.icons.slice(0, data.icons.length - 1), 'applesauce'];
    expect(addIcon(testIcons, 'applesauce')).toEqual(testSolution);
  })
})

describe("calcPercentage", () => {
  it("should return the percentage of a whole to 2 decimal places", () => {
    const percentage = calcPercentage(data.expenses.grocery, data.totalSpent);
    expect(percentage).toBe(0.27);
  })

  it("should return the percentage of a whole to 2 decimal places if the part is 100 percent of expenses", () => {
    const percentage = calcPercentage(1120, data.totalSpent);
    expect(percentage).toBe(1);
  })

  it("should return the percentage of a whole to 2 decimal places if the part is 0 percent of the expenses", () => {
    const percentage = calcPercentage(0, data.totalSpent);
    expect(percentage).toBe(0);
  })
})

describe("toggleTransaction", () => {
  it("should subtract an item from toggleList if it exists", () => {
    //one item to zero items
    const newToggleList = toggleTransaction(['coffee'], 'coffee');
    expect(newToggleList).toEqual([]);
    expect(newToggleList.length).toBe(0);

    // two items to one item
    const newToggleList2 = toggleTransaction(['coffee', 'house'], 'coffee');
    expect(newToggleList2).toEqual(['house']);
    expect(newToggleList2.length).toBe(1);
  })

  it("should add an item to toggleList if it did not exist", () => {
    // zero items to one item
    const newToggleList = toggleTransaction([...data.toggleList], 'coffee');
    expect(newToggleList).toEqual(['coffee']);
    expect(data.toggleList.length + 1).toBe(newToggleList.length);

    // one items to two item
    const newToggleList2 = toggleTransaction([...data.toggleList, 'house'], 'coffee');
    expect(newToggleList2).toEqual(['house', 'coffee']);
    expect(data.toggleList.length + 2).toBe(newToggleList2.length);
  })
})

describe("calcToggledTransactions", () => {
  it("should calculate total expenses using toggled transactions", () => {
    const copyOfToggledTransactions = ['coffee', 'grocery'];
    const totalExcludingToggledExpenses = calcToggledTransactions(copyOfToggledTransactions, data.allTransactions)
    expect(totalExcludingToggledExpenses).toBe(data.totalSpent - 400)
  })

  it("should calculate total expenses if toggled transactions are empty", () => {
    const copyOfToggledTransactions = [];
    const totalExcludingToggledExpenses = calcToggledTransactions(copyOfToggledTransactions, data.allTransactions)
    expect(totalExcludingToggledExpenses).toBe(data.totalSpent)
  })
})



describe("getContinuousInterest", () => {
  it("should calculate the compound interest for a given amount over 1 year", () => {
    expect(getContinuousInterest(data.monthlyBudget - data.totalSpent)).toBe(2961.86)
  })

  it("should return 0 if initial amount is negative", () => {
    expect(getContinuousInterest(-15)).toBe(0)
  })

  it("should return 0 if initial amount is 0", () => {
    expect(getContinuousInterest(0)).toBe(0)
  })
})

describe("getContinuousInterest7", () => {

  it("should calculate the compound interest for an initial amount over 7 years", () => {
    const expectedGrowth7 = [2680.00, 2961.86, 3273.36, 3617.62, 3998.09, 4418.57, 4883.28, 5396.86];
    expect(getContinuousInterest7(data.monthlyBudget - data.totalSpent)).toEqual(expectedGrowth7)
  })

  it("should return an array of length 8", () => {
    expect(getContinuousInterest7(data.monthlyBudget - data.totalSpent).length).toBe(8)
  })
})
