import React, { useState } from 'react';
import AddCategoryModalCSS from './AddCategoryModal.module.css';
import Expense from '../mainInterface/Expense.jsx';
import { faStar, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AddCategoryModal = ({ closeModalHandler, addExpenseCategoryHandler }) => {
  const [expenseCategory, setExpenseCategory] = useState('')

  const changeCategory = (e) => {
    setExpenseCategory(e.target.value)
  }

  return (
    <form onSubmit={() => addExpenseCategoryHandler(expenseCategory)} className={AddCategoryModalCSS.container}>
      <h2>Enter category that you'd like to add.</h2>
      <div className={AddCategoryModalCSS['category-container-modal']}>
        <FontAwesomeIcon
          className={AddCategoryModalCSS['icon']}
          icon={faStar}
        />
        <span className={AddCategoryModalCSS['new-category']}>{expenseCategory}</span>
      </div>
      <div
        className={AddCategoryModalCSS['input-container']}>
        {expenseCategory.length === 0 &&
          <span className={AddCategoryModalCSS['warning']}>
            Please enter category
          </span>
        }

        <input
          value={expenseCategory}
          placeholder='category'
          onChange={(e) => { changeCategory(e) }}
          className={AddCategoryModalCSS['category-input']}
          name="category">
        </input>
      </div>
      {expenseCategory.length !== 0 &&
        <button
          type='submit'
          className={AddCategoryModalCSS['btn__submit-category']}>Submit Category
        </button>
      }
      <FontAwesomeIcon
        onClick={() => closeModalHandler('categoriesModal')}
        className={AddCategoryModalCSS['btn__close-category']}
        icon={faCircleXmark}
      />
    </form>
  )
}

export default AddCategoryModal