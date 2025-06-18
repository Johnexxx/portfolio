import React from 'react'
import '@/styles/pages/_skills.scss'

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <div className="meteor-shower-bg">
        {Array.from({ length: 12 }).map((_, i) => (
          <span className={`meteor meteor${i + 1}`} key={i}></span>
        ))}
      </div>
      {/* ...your skills content here... */}
    </section>
  )
}

export default Skills
