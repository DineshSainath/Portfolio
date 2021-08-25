import React from "react";
import { SiGmail, SiLinkedin, SiGithub, SiReact } from "react-icons/si";
import { Document, Page, pdfjs } from "react-pdf";

function Footer() {

return (
    <section className="Footer">
    <div className="container-fluid">
    <h5>If you have a project that requires my expertise, let's get in touch!</h5>
        <ul className="list-inline ">
        <a className="cIcon" href="mailto:sainath.dinesh@gmail.com" target="_blank">
          <li className="list-inline-item mx-5 icon">
            <SiGmail size={30} />
          </li> </a>
          <a className="cIcon" href="https://linkedin.com/in/dineshsainath/" target="_blank">
          <li className="list-inline-item mx-5 icon">
            <SiLinkedin size={30} />
          </li></a>
          <a className="cIcon" href="https://github.com/dineshsainath/" target="_blank">
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