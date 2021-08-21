import React from "react";
import { SiGmail, SiLinkedin, SiGithub, SiReact } from "react-icons/si";

function Footer() {

return (
    <section className="Footer">
    <div className="container-fluid">
    <h4>C O N T A C T</h4>
        <ul className="list-inline ">
        <a className="cIcon" href="mailto:sainath.dinesh@gmail.com" target="_blank">
          <li className="list-inline-item mx-5 icon">
            <SiGmail size={30} />
          </li> </a>
          <a className="cIcon" href="linkedin.com/in/dineshsainath/" target="_blank">
          <li className="list-inline-item mx-5 icon">
            <SiLinkedin size={30} />
          </li></a>
          <a className="cIcon" href="github.com/dineshsainath/" target="_blank">
          <li className="list-inline-item mx-5 icon">
            <SiGithub size={30} />
          </li></a>
          </ul>
          </div>
          <footer><p>Made with <SiReact/></p></footer>
    </section>
);

}

export default Footer;