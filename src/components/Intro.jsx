import React from "react";
import Typed from "react-typed";
import "../../public/styles.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import PdfIcon from "@material-ui/icons/PictureAsPdf";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Intro() {
  return (
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="intro-title mb-4">Hello, I'm Dinesh Sainath</h1>
          <p className="intro-subtitle">
            <span className="text-slider-items"></span>
            <strong className="text-slider">
              <Typed
                strings={["Front End Developer", "Software Engineer"]}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </strong>
          </p>
          {/* <a
              className="btn btn-primary btn js-scroll px-4"
              href="#work"
              role="button"
            >
              View My Work
            </a> */}
          <div className="center">
            <span className="col">
              {
                <a href="google.com">
                  <PdfIcon
                    className="icon"
                    color="primary"
                    style={{ fontSize: "40px" }}
                  />
                </a>
              }
              Resume
            </span>
            <span className="col">
              {
                <GitHubIcon
                  className="icon"
                  color="primary"
                  style={{ fontSize: "40px" }}
                />
              }
              Github
            </span>
            <span className="col">
              {
                <LinkedInIcon
                  className="icon"
                  color="primary"
                  style={{ fontSize: "40px" }}
                />
              }
              LinkedIn
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
