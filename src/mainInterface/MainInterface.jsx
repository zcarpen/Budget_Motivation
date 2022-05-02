import React from 'react';
import Breakdown from './Breakdown.jsx'
import MainInterfaceCSS from './MainInterface.module.css';
import Expenses from './Expenses.jsx';

const MainInterface = () => {
  return (
    <div className={MainInterfaceCSS['main-interface-container']}>
      <h3>Add An Expense</h3>
      <Breakdown />
      <Expenses />
    </div>
  )
}

export default MainInterface;