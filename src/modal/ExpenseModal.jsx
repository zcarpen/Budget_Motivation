import React, { useState } from 'react';
import * as uuid from 'uuid';
import ExpenseModalCSS from './ExpenseModal.module.css';
import Expense from '../mainInterface/Expense.jsx';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ExpenseModal = ({ expense, addTransactionHandler, closeModalHandler }) => {
  const [amount, setAmount] = useState('')

  const icons = ['other', 'coffee', 'grocery', 'gas', 'eat-out', 'movie', 'music', 'house', 'gifts', 'snack', 'games', 'self-care']

  const createTransaction = (e) => {
    e.preventDefault()
    let time = new Date().getTime()
    let id = uuid.v4()
    const expenseObj = {
      id: id,
      type: expense,
      amount: Number(amount),
      time: time,
    }
    addTransactionHandler(expenseObj)
  }

  const checkAmount = (e) => {
    if (Number(e.target.value) && Number(e.target.value) >= 0) {
      setAmount(e.target.value)
    }
  }
  return (
    <form onSubmit={(e) => createTransaction(e)} className={ExpenseModalCSS.container}>
      <h2>Enter Amount Spent</h2>
      <div className={ExpenseModalCSS['expenses-container']}>
        <Expense expenseType={expense} modal={true} />
      </div>
      <div className={ExpenseModalCSS['input-container']}>
        {!Number(amount) > 0 && <span className={ExpenseModalCSS['warning']}>Please enter amount</span>}
        <span className={ExpenseModalCSS['dollar-sign']}>$</span>
        <input value={amount} placeholder={amount} onChange={(e) => { checkAmount(e) }} className={ExpenseModalCSS['expense-input']} name="amount"></input>
      </div>
      {Number(amount) > 0 && <button type='submit' className={ExpenseModalCSS['btn__submit-expense']}>Submit Expense</button>}
      <FontAwesomeIcon onClick={() => closeModalHandler('expenseModal')} className={ExpenseModalCSS['btn__close-expense']} icon={faCircleXmark} />
    </form>
  )
}

export default ExpenseModal