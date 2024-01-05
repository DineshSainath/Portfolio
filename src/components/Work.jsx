import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Work.css'
AOS.init()

function Work() {
  return (
    <section className="work">
      <h3>WORK EXPERIENCE</h3>
      <div className="container-fluid">
        <div className="card-deck">
          <div className="card col-md-5 shadow p-3 mb-5 bg-body rounded custom-col">
            {/* data-aos="fade-left" */}
            <h2 className="card-title">Gravvity</h2>
            <div display="flex">
              <h5 className="card-subtitle">Software Developer</h5>
              <h7 className="date">Apr '23 - Present</h7>
            </div>
            <p className="card-text">
              <li>Analyzed the business model & proposed the UI mockup</li>
              <li>Developed the front-end interface using HTML, CSS and JS</li>
              <li>
                Produced visual elements and functionalities for ecommerce for
                virtual reality systems
              </li>
            </p>
          </div>
          <div className="card col-md-5 shadow p-3 mb-5 bg-body rounded">
            <h2 className="card-title">Vankay Systems</h2>
            <div display="flex">
              <h5 className="card-subtitle">Web Developer Intern</h5>
              <h7 className="date">July '22 - Jan '23</h7>
            </div>
            <p className="card-text">
              <li>
                Developed reusable components for the user interface using
                React.js, Forms, and React Hooks.
              </li>
              <li>
                Enhanced the performance by using efficient es6 algorithms.{' '}
              </li>
              <li>Integrate RESTful API data into components and database</li>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
