import React, { useState, useEffect } from 'react'
import './styles.css'
import './navbar.css'

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsVisible(currentScrollPos <= prevScrollPos || currentScrollPos === 0)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <div className={`container-fluid ${isVisible ? 'visible' : 'hidden'}`}>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top slideIn">
        <a className="navbar-brand" href="#nav" id="nav">
          DS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#skillsScroll">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projectsScroll">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workScroll">
                Work
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
