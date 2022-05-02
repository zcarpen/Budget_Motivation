import { useState } from 'react'
import logo from './logo.svg'
import AppCSS from './App.module.css'
import MainInterface from './mainInterface/MainInterface'
import Nav from './nav/Nav'

function App() {

  return (
    <div className={AppCSS.app}>
      <Nav />
      <MainInterface />
    </div>
  )
}

export default App
