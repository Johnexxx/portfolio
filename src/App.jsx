import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Approutes from './routes/Approutes'
import './styles/main.scss'

const App = () => {
  return (
    <>
      <Router>
        <Approutes />
      </Router>
    </>
  )
}

export default App
