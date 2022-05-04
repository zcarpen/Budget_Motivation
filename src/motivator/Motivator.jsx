import React, { useState } from 'react';
import MotivatorCSS from './Motivator.module.css';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { createExpensesObj, toggleTransaction, calcToggledTransactions, getContinuousInterest7, calcTotalExpenses } from '../helperFunctions.js';


const Motivator = ({ userData }) => {

  const [arrayOfToggledExpenseTypes, setArrayOfToggledExpenseTypes] = useState([]);
  const [toggledAmount, setToggleAmount] = useState(0);
  const spent = calcTotalExpenses(userData.allTransactions);
  const anticipatedGrowthPoints = getContinuousInterest7(Number(userData.monthly.income - userData.monthly.budget));
  const actualGrowthPoints = getContinuousInterest7(userData.monthly.income - spent);
  const motivationGrowthPoints = getContinuousInterest7(userData.monthly.income - spent + calcToggledTransactions(arrayOfToggledExpenseTypes, userData.allTransactions))
  console.log(actualGrowthPoints)
  console.log(anticipatedGrowthPoints)
  console.log(motivationGrowthPoints)
  const expensesObj = createExpensesObj(userData.allTransactions)

  console.log(userData)
  return (
    <div className={MotivatorCSS['relative']}>
      <div className={MotivatorCSS['motivator-container']}>
        <h1>Toggle Categories!!!</h1>
        <p>(Imagine trying to spend a little less)</p>
        <div className={MotivatorCSS['expense-categories']}>
          {Object.entries(expensesObj).map((transaction, idx) => {
            return (
              <div className={MotivatorCSS['expense']} key={idx}>
                <h4>{transaction[0]}</h4>
                <p>{Number(transaction[1]).toFixed(2)}</p>
              </div>
            )
          })}
        </div>
        <div className={MotivatorCSS['graph-container']}>
          <Line data={{
            labels: ['current', '1y', '2y', '3y', '4y', '5y', '6y', '7y'],
            datasets: [
              {
                label: 'actual',
                data: actualGrowthPoints,
                borderColor: 'rgba(255, 1, 175, 1)',
                borderWidth: 1,
                tension: 0.1,
              },
              {
                label: 'anticipated',
                data: anticipatedGrowthPoints,
                borderColor: 'rgba(1, 90, 255, 1)',
                borderWidth: 1,
                tension: 0.1,
              },
              {
                label: 'motivation',
                data: motivationGrowthPoints,
                borderColor: 'rgba(52, 255, 1, 1)',
                borderWidth: 1,
                tension: 0.1,
              },
            ]
          }} />
        </div>
      </div>
    </div>
  )
}

export default Motivator