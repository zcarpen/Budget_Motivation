import { useState } from 'react'

import { addTransaction, deleteIcon, addIcon } from './helperFunctions.js';
import logo from './logo.svg'
import AppCSS from './App.module.css'
import MainInterface from './mainInterface/MainInterface'
import Nav from './nav/Nav'
import ExpenseModal from './modal/ExpenseModal.jsx'
import AddCategoryModal from './modal/AddCategoryModal.jsx'

const routes = {
  MAIN: "MAIN",
  MOTIVATOR: "MOTIVATOR",
  CHART: "CHART",
}

const icons = ['other', 'coffee', 'grocery', 'gas', 'eat-out', 'movie', 'music', 'house', 'gifts', 'snack', 'games', 'self-care']

const transactions = [
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
]

const id = 100;

const userName = 'zcarpen';
const income = 5500;
const budget = 3800;

function App() {

  const [route, setRoute] = useState(routes.MAIN);
  const [expenseCategories, setExpenseCategories] = useState(icons);
  const [allTransactions, setAllTransactions] = useState(transactions);
  const [monthlyIncome, setMonthlyIncome] = useState(income);
  const [monthlyBudget, setMonthlyBudget] = useState(budget);
  const [nextTransactionID, setNextTransactionID] = useState(id);
  const [expenseModal, setExpenseModal] = useState({ isVisible: false, expense: '' });
  const [categoryModalIsVisible, setCategoryModalIsVisible] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  const addTransactionHandler = (expense) => {
    const newTransactions = addTransaction(expense, allTransactions)
    setAllTransactions(newTransactions)
    setExpenseModal(false)
    // add transaction to DB

  }
  const handleExpenseModal = (e) => {
    setExpenseModal({ isVisible: true, expense: e.currentTarget.id })
  }

  const closeModalHandler = (modalType) => {
    if (modalType === 'expenseModal') {
      setExpenseModal(false)
    }
    if (modalType === 'categoriesModal') {
      setCategoryModalIsVisible(false)
    }
  }

  const deleteExpenseCategoryHandler = (expenseType) => {
    if (!canDelete) {
      setCanDelete(true)
    } else {
      setExpenseCategories(deleteIcon(expenseCategories, expenseType))
      setCanDelete(false);
    }
  }

  const addExpenseCategoryHandler = (expenseType) => {
    if (!categoryModalIsVisible) {
      setCategoryModalIsVisible(true)
    } else {
      setExpenseCategories(addIcon(expenseCategories, expenseType))
      setCategoryModalIsVisible(false);
    }
  }





  // useEffect(() => {
  //   // data returned from DB
  //   setExpenseCategories(data.categ)

  // }, [])

  // const routes = {
  //   DASH: "DASH",
  //   MOTIVATOR: "MOTIVATOR"
  // }



  // setRoute(routes.DASH)
  // if (routes.DASH) return <Dash></Dash>
  // if (routes.MOTIVATOR)
  console.log(allTransactions)
  console.log(expenseCategories)

  return (
    <div className={AppCSS.app} >
      <Nav route={route} userName={userName} />
      <MainInterface
        expenseCategories={expenseCategories}
        allTransactions={allTransactions}
        monthlyIncome={monthlyIncome}
        monthlyBudget={monthlyBudget}
        canDelete={canDelete}
        handleExpenseModal={handleExpenseModal}
        addExpenseCategoryHandler={addExpenseCategoryHandler}
        deleteExpenseCategoryHandler={deleteExpenseCategoryHandler}
      />
      {expenseModal.isVisible && <ExpenseModal
        expense={expenseModal.expense}
        addTransactionHandler={addTransactionHandler}
        closeModalHandler={closeModalHandler} />}
      {categoryModalIsVisible && <AddCategoryModal
        addExpenseCategoryHandler={addExpenseCategoryHandler}
        closeModalHandler={closeModalHandler} />}
    </div >
  )
}

export default App
