import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Work() {

    return (
    <section className="work">
    <h3>W O R K &ensp; E X P E R I E N C E</h3>
        <div className="container-fluid">
        
            <div className="card-deck">
            <div className="card col-5 shadow p-3 mb-5 bg-body rounded" data-aos="fade-right">
                <h2 className="card-title">Vankay Systems</h2>
                <div display="flex"><h5 className="card-subtitle">Junior Web Developer</h5>
                <h7 className="date">May - June 2020</h7></div>
                <p className="card-text">
                    <li>
                        Analyzed the business model & proposed the UI mockup
                    </li>
                    <li>Developed the front-end website using HTML, CSS and JS
                    </li>
                    <li>Integrated Wordpress to enable easy management</li>
                </p>
                </div>
                <div className="card col-5 shadow p-3 mb-5 bg-body rounded" data-aos="fade-left">
                    <h2 className="card-title">Jgames</h2>
                    <div display="flex">
                    <h5 className="card-subtitle">Junior Software Developer</h5>
                    <h7 className="date">Sep - Dec 2019</h7></div>
                    <p className="card-text">
                        <li>Developed an interactive memory game using OOPS</li>
                        <li>Enhanced the performance using efficient algorithms</li>
                        <li>Implemented error-handling and Regression testing</li>
                        
                    </p>
                </div>
                </div>
        </div>
    </section>);

}

export default Work;
