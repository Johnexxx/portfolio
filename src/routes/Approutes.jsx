import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Hero from '@/pages/Hero'
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';

const Approutes = () => {
  return (
    <div>
      <Routes>
            <Route element={<Home />}>
                <Route path="/" element={<Hero />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/projects" element={<Projects />}/>
              </Route>

        </Routes>
    </div>
  )
}

export default Approutes
