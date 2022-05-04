import React from 'react';
import SelectCSS from './Select.module.css';

const Select = ({ handlePageSwitch }) => {
  return (
    <select className={SelectCSS["select-menu"]} onChange={(e) => handlePageSwitch(e)}>
      <option>Home</option>
      <option>Investment Motivator</option>
      <option>Expense Comparison</option>
    </select>
  )
}

export default Select