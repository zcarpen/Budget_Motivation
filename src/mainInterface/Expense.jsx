import React from 'react';
import ExpenseCSS from './Expense.module.css';
import {
  faMugSaucer,
  faCartShopping,
  faGasPump,
  faBurger,
  faTicket,
  faMusic,
  faHouse,
  faGift,
  faCookieBite,
  // faGamePad,
  faFaceSmile,
  faCircleQuestion,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expense = ({ expenseType }) => {
  const iconSelector = (type) => {
    if (type === 'coffee') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faMugSaucer} />//coffee
    }
    if (type === 'gas') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faGasPump} />//gas
    }
    if (type === 'eat-out') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faBurger} />//eatout
    }
    if (type === 'movie') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faTicket} />//movie
    }
    if (type === 'music') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faMusic} />//music
    }
    if (type === 'grocery') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faCartShopping} />//grocery
    }
    if (type === 'house') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faHouse} />//house
    }
    if (type === 'gifts') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faGift} />//gifts
    }
    if (type === 'snack') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faCookieBite} />//snacks
    }
    // if (type === ) {
    //   return <FontAwesomeIcon className={ExpenseCSS['icon']} icon="fa-solid fa-gamepad" />//games
    // }
    if (type === 'self-care') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faFaceSmile} />//self-care
    }
    if (type === 'other') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faCircleQuestion} />//other
    }
    if (type === 'favorite') {
      return <FontAwesomeIcon className={ExpenseCSS['icon']} icon={faStar} />//favorite
    }
  }
  return (
    <div className={ExpenseCSS['expense-container']}>
      {iconSelector(expenseType)}
      <p className={ExpenseCSS["expense-type"]}>{expenseType}</p>
    </div>
  )
}

export default Expense