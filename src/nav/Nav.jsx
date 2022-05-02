import React from 'react';
import NavCSS from './Nav.module.css';
import Select from './Select'

const Nav = ({ userName, routes }) => {
  return (
    <nav className={NavCSS.nav}>
      <h4 className={NavCSS["signed-in-as"]}>Signed in as: <span className={NavCSS["user-name"]}>{userName}</span></h4>
      <Select className={NavCSS["select"]} />
    </nav>
  )

}

export default Nav;