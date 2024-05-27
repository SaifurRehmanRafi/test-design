import React from 'react'
import Header from '../Component/Header'
import Menu from '../Component/Menu'
import './App.css'

const App = () => {
  return (
    <div>
      
      <div className="header">
      <Menu/>
      <Header/>
      </div>

    </div>
  )
}

export default App