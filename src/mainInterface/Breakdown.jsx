import React from 'react';

import BreakdownCSS from './Breakdown.module.css';

const Breakdown = () => {
  return (
    <div className={BreakdownCSS['breakdown-container']}>
      <p className={BreakdownCSS['breakdown-point']}>
        Budget:
        <span className={BreakdownCSS['budget']}>
          3800.00
        </span>
      </p>
      <p className={BreakdownCSS['breakdown-point']}>
        Spent:
        <span className={BreakdownCSS['spent']}>
          1120.00
        </span>
      </p>
      <p className={BreakdownCSS['breakdown-point']}>
        Left:
        <span className={BreakdownCSS['left']}>
          2680.00
        </span>
      </p>
    </div>
  )

}

export default Breakdown