import React from 'react';
import ExpensesCSS from './Expenses.module.css';
import Expense from './Expense.jsx';

const Expenses = () => {
  const icons = [
    'other',
    'coffee',
    'grocery',
    'gas',
    'eat-out',
    'movie',
    'music',
    'house',
    'gifts',
    'snack',
    'games',
    'self-care'
  ]


  return (
    <div className={ExpensesCSS['expenses-container']}>
      {icons.map((expenseType => <Expense expenseType={expenseType} />))}
    </div>
  )
}

export default Expenses