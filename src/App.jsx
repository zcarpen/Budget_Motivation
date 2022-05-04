import { useState, useEffect } from 'react'

import { addTransaction, deleteIcon, addIcon } from './helperFunctions.js';
import { createUser, getUser, addToUser } from './apiMaster';
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

const userName = 'zcarpen';

function App() {

  const [route, setRoute] = useState(routes.MAIN);
  const [userID, setUserID] = useState('')
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [userName, setUserName] = useState('');
  const [expenseModal, setExpenseModal] = useState({ isVisible: false, expense: '' });
  const [categoryModalIsVisible, setCategoryModalIsVisible] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  const addTransactionHandler = (expense) => {
    const newTransactions = addTransaction(expense, allTransactions)
    setAllTransactions(newTransactions)
    setExpenseModal(false)
    addToUser(userName, newTransactions, 'allTransactions')
  }
  const handleExpenseModal = (e) => {
    console.log(e.currentTarget.id)
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
      addToUser(userName, deleteIcon(expenseCategories, expenseType), 'expenseCategories')
      setCanDelete(false);
    }
  }


  const addExpenseCategoryHandler = (expenseType) => {
    if (!categoryModalIsVisible) {
      setCategoryModalIsVisible(true)
    } else {
      setExpenseCategories(addIcon(expenseCategories, expenseType))
      addToUser(userName, addIcon(expenseCategories, expenseType), 'expenseCategories')
      setCategoryModalIsVisible(false);
    }
  }

  useEffect(() => {
    const asyncMethod = async () => {
      const userInfo = await getUser('zcarpen')
      const { expenseCategories, allTransactions, userName, income, budget, totalSaved } = userInfo[0].history[0].data
      setUserID(userInfo[0]._id)
      setExpenseCategories(expenseCategories)
      setAllTransactions(allTransactions)
      setMonthlyIncome(income)
      setMonthlyBudget(budget)
      setUserName(userName)
    }
    asyncMethod()
  }, [])

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
