import { useState } from 'react'
import logo from './logo.svg'
import AppCSS from './App.module.css'
import MainInterface from './mainInterface/MainInterface'
import Nav from './nav/Nav'

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

const userName = 'zcarpen';
const income = 5500;
const budget = 3800;

function App() {

  const [route, setRoute] = useState(routes.MAIN);
  const [expenseCategories, setExpenseCategories] = useState(icons);
  const [allTransactions, setAllTransactions] = useState(transactions);
  const [monthlyIncome, setMonthlyIncome] = useState(income);
  const [monthlyBudget, setMonthlyBudget] = useState(budget);


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

  return (
    <div className={AppCSS.app}>
      <Nav route={route} userName={userName} />
      <MainInterface
        expenseCategories={expenseCategories}
        allTransactions={allTransactions}
        monthlyIncome={monthlyIncome}
        monthlyBudget={monthlyBudget}
      />
    </div>
  )
}

export default App
