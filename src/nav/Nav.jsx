import React from 'react';
import NavCSS from './Nav.module.css';
import Select from './Select'

const Nav = () => {
  return (
    <nav className={NavCSS.nav}>
      <h4 className={NavCSS["signed-in-as"]}>Signed in as:</h4>
      <Select />
    </nav>
  )

}

export default Nav;