import React from 'react';
import ExpenseCSS from './Expense.module.css';
import {
  faMugSaucer, faCartShopping, faGasPump, faBurger, faTicket, faMusic, faHouse, faGift, faCookieBite, faGamepad, faFaceSmile, faCircleQuestion, faStar, faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expense = ({ expenseType, handleExpenseModal, modal, canDelete, deleteExpenseCategoryHandler }) => {
  const icons = {
    coffee: faMugSaucer,
    gas: faGasPump,
    'eat-out': faBurger,
    movie: faTicket,
    music: faMusic,
    grocery: faCartShopping,
    house: faHouse,
    gifts: faGift,
    snack: faCookieBite,
    games: faGamepad,
    'self-care': faFaceSmile,
    other: faCircleQuestion,
  }

  let styleName = modal ? 'expense-container-modal' : 'expense-container';

  const iconSelector = (type) => {
    if (icons[type] === undefined) {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faStar} />
    }
    return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={icons[type]} />
  }

  return (
    <div className={ExpenseCSS[styleName]}>
      <div onClick={(e) => handleExpenseModal(e)} className={ExpenseCSS['contain']} id={expenseType}>
        {iconSelector(expenseType)}
        <p className={ExpenseCSS["expense-type"]}>{expenseType}</p>
      </div>
      {canDelete && <FontAwesomeIcon onClick={() => deleteExpenseCategoryHandler(expenseType)} className={ExpenseCSS['btn__delete-category']} icon={faCircleXmark} />
      }
    </div>
  )
}

export default Expense