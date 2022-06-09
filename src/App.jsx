import React from 'react'
import Header from './components/Header/Header'
import Rocker from './components/Rocker/Rocker'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import AboutMe from './components/Header/AboutMe'

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [showSkills, setShowSkills] = React.useState(false)
  
  function toggleDarkMode() {
    setIsDarkMode(prevIsDarkMode => {
      if (isDarkMode) {
        document.body.classList.remove('dark-theme')
        return false
      } else {
        document.body.classList.add('dark-theme')
        return true
      }
    })
  }

  function toggleRocker() {
    // true: Show Portfolio
    // false: Show Skills
    setShowSkills(prevShowSkills => !prevShowSkills)
  }

  return (
    <section>
      <Header
        isDarkMode={isDarkMode}
        onClick={toggleDarkMode}
      />
    
      
      <Rocker
        isDarkMode={isDarkMode}
        showSkills={showSkills}
        onClick={toggleRocker}
      />
      
      {showSkills ? <Skills /> : <Portfolio />}

      <Footer />
    </section>
  )
}

export default App
