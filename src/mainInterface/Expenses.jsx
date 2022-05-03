import React from 'react';
import ExpensesCSS from './Expenses.module.css';
import Expense from './Expense.jsx';

const Expenses = ({ handleExpenseModal, canDelete, deleteExpenseCategoryHandler, expenseCategories }) => {

  return (
    <div className={ExpensesCSS['expenses-container']}>
      {expenseCategories.map((expenseType =>
        <Expense
          handleExpenseModal={handleExpenseModal}
          expenseType={expenseType}
          modal={false}
          canDelete={canDelete}
          deleteExpenseCategoryHandler={deleteExpenseCategoryHandler}
        />))}
    </div>
  )
}

export default Expenses