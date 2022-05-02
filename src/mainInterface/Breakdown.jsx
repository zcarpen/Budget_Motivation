import React from 'react';
import BreakdownCSS from './Breakdown.module.css';
import { calcTotalExpenses } from '../helperFunctions.js'

const Breakdown = ({
  allTransactions,
  monthlyBudget
}) => {
  const spent = calcTotalExpenses(allTransactions)
  return (
    <div className={BreakdownCSS['breakdown-container']}>
      <p className={BreakdownCSS['breakdown-point']}>
        Budget:
        <span className={BreakdownCSS['budget']}>
          {monthlyBudget.toFixed(2)}
        </span>
      </p>
      <p className={BreakdownCSS['breakdown-point']}>
        Spent:
        <span className={BreakdownCSS['spent']}>
          {spent.toFixed(2)}
        </span>
      </p>
      <p className={BreakdownCSS['breakdown-point']}>
        Left:
        <span className={BreakdownCSS['left']}>
          {(monthlyBudget - spent).toFixed(2)}
        </span>
      </p>
    </div>
  )

}

export default Breakdown