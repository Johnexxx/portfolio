import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Approutes from './routes/Approutes'
import './styles/main.scss'

const App = () => {
  return (
    <div>
      <Router>
        <Approutes />
      </Router>
    </div>
  )
}

export default App
