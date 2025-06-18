import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Hero from '@/pages/Hero'
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

const Approutes = () => {
  return (
    <div>
      <Routes>
            <Route element={<Home />}>
                <Route path="/" element={<Hero />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
              </Route>

        </Routes>
    </div>
  )
}

export default Approutes
