import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="App">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <section id="home">
          <Hero onNavigate={scrollToSection} />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <InquiryForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
