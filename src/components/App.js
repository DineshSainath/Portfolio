import './styles.css'
import React from 'react'
import Navbar from './navbar'
import Intro from './Intro0'
import Vertical from './vertical'
import Skills from './Skills'
import Work from './Work'
import Footer from './Footer'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <div className="pro" id="projectsScroll">
        <h3> P R O J E C T S </h3>
      </div>
      <Vertical />
      <Work />
      <Footer />
    </div>
  )
}
