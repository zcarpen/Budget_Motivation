import React from 'react';
import SelectCSS from './Select.module.css';

const Select = () => {
  return (
    <select className={SelectCSS["select-menu"]}>
      <option>Home</option>
      <option>Investment Motivator</option>
      <option>Expense Comparison</option>
    </select>
  )
}

export default Select