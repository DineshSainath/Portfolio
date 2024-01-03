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
            <h2 className="card-title">Vankay Systems</h2>
            <div display="flex">
              <h5 className="card-subtitle">Junior Web Developer</h5>
              <h7 className="date">Jan - April 2020</h7>
            </div>
            <p className="card-text">
              <li>Analyzed the business model & proposed the UI mockup</li>
              <li>Developed the front-end website using HTML, CSS and JS</li>
              <li>Integrated Wordpress to enable easy management</li>
            </p>
          </div>
          <div className="card col-md-5 shadow p-3 mb-5 bg-body rounded">
            <h2 className="card-title">iCommunity</h2>
            <div display="flex">
              <h5 className="card-subtitle">IT Intern</h5>
              <h7 className="date">July - Dec 2020</h7>
            </div>
            <p className="card-text">
              <li>
                {' '}
                Developed the front-end platform for students to engage and
                network within a community
              </li>
              <li>Enhanced the performance using efficient algorithms</li>
              <li>Maintain website content, posts and pages</li>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
