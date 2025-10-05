import { useEffect } from 'react'
import AOS from 'aos'
import Navigation from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App