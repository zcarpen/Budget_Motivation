import React from 'react';
import Breakdown from './Breakdown.jsx'
import MainInterfaceCSS from './MainInterface.module.css';
import Expenses from './Expenses.jsx';

const MainInterface = ({
  expenseCategories,
  allTransactions,
  monthlyIncome,
  monthlyBudget,
  canDelete,
  handleExpenseModal,
  deleteExpenseCategoryHandler,
  addExpenseCategoryHandler
}) => {

  return (
    <div className={MainInterfaceCSS['main-interface-container']}>
      <h3>Add An Expense</h3>
      <Breakdown
        allTransactions={allTransactions}
        monthlyBudget={monthlyBudget}
        monthlyIncome={monthlyIncome}
      />
      <Expenses
        expenseCategories={expenseCategories}
        handleExpenseModal={handleExpenseModal}
        canDelete={canDelete}
        deleteExpenseCategoryHandler={deleteExpenseCategoryHandler}
      />
      <div className={MainInterfaceCSS['btn-container']}>
        <button onClick={deleteExpenseCategoryHandler} className={MainInterfaceCSS['btn__delete-icon']}>Delete Category</button>
        <button onClick={addExpenseCategoryHandler} className={MainInterfaceCSS['btn__add-icon']}>Add Category</button>
      </div>
    </div>
  )
}

export default MainInterface;