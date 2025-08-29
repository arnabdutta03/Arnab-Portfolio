// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col cursor-fancy">
      <Header />
      <main className="relative z-10 flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
