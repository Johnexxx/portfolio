import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Hero from '../pages/Hero'


const Approutes = () => {
  return (
    <div>
      <Routes>
            {/* Landind Routes */}
            <Route element={<Home />}>
                <Route path='/' element={<Hero />} />
            </Route>

        </Routes>
    </div>
  )
}

export default Approutes
