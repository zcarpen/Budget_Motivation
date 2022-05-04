import { useState, useEffect } from 'react'

import { addTransaction, deleteIcon, addIcon } from './helperFunctions.js';
import { createUser, getUser, addToUser } from './apiMaster';
import AppCSS from './App.module.css';
import MainInterface from './mainInterface/MainInterface';
import Nav from './nav/Nav';
import ExpenseModal from './modal/ExpenseModal.jsx';
import AddCategoryModal from './modal/AddCategoryModal.jsx';
import Motivator from './motivator/Motivator.jsx';


const userName = 'zcarpen';

function App() {
  const [userData, setUserData] = useState({
    monthly: { budget: 0, income: 0 },
    allTransactions: [],
    expenseCategories: [],
    userName: ''
  })
  const [expenseModal, setExpenseModal] = useState({ isVisible: false, expense: '' });
  const [categoryModalIsVisible, setCategoryModalIsVisible] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [route, setRoute] = useState('Home')

  const addTransactionHandler = (expense) => {
    const newTransactions = addTransaction(expense, userData.allTransactions)
    setUserData({ ...userData, allTransactions: newTransactions })
    setExpenseModal(false)
    addToUser(userName, newTransactions, 'allTransactions')
  }

  const handlePageSwitch = (e) => {
    setRoute(e.target.value);
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
      setUserData({ ...userData, expenseCategories: deleteIcon(userData.expenseCategories, expenseType) })
      addToUser(userName, deleteIcon(userData.expenseCategories, expenseType), 'expenseCategories')
      setCanDelete(false);
    }
  }

  const addExpenseCategoryHandler = (expenseType) => {
    if (!categoryModalIsVisible) {
      setCategoryModalIsVisible(true)
    } else {
      const newCategories = addIcon(userData.expenseCategories, expenseType)
      addToUser(userName, newCategories, 'expenseCategories')
      setUserData({ ...userData, expenseCategories: newCategories })
      setCategoryModalIsVisible(false);
    }
  }

  useEffect(() => {
    const asyncMethod = async () => {
      const userInfo = await getUser('zcarpen')
      const { expenseCategories, allTransactions, userName, income, budget, totalSaved } = userInfo[0].history[0].data
      setUserData({
        monthly: { 'income': income, 'budget': budget },
        allTransactions: allTransactions,
        expenseCategories: expenseCategories,
        userName: userName
      })
    }
    asyncMethod()
  }, [])
  console.log(route)
  return (
    <div className={AppCSS.app} >
      <Nav userName={userName} handlePageSwitch={handlePageSwitch} />
      {route === 'Home' && <MainInterface
        userData={userData}
        canDelete={canDelete}
        handleExpenseModal={handleExpenseModal}
        addExpenseCategoryHandler={addExpenseCategoryHandler}
        deleteExpenseCategoryHandler={deleteExpenseCategoryHandler}
      />}
      {route === 'Investment Motivator' && <Motivator userData={userData} />}
      {expenseModal.isVisible && route === 'Home' && <ExpenseModal
        expense={expenseModal.expense}
        addTransactionHandler={addTransactionHandler}
        closeModalHandler={closeModalHandler} />}
      {categoryModalIsVisible && route === 'Home' && <AddCategoryModal
        addExpenseCategoryHandler={addExpenseCategoryHandler}
        closeModalHandler={closeModalHandler} />}
    </div >
  )
}

export default App

// const routes = {
//   MAIN: "MAIN",
//   MOTIVATOR: "MOTIVATOR",
//   CHART: "CHART",
// }
// const [route, setRoute] = useState(routes.MAIN);