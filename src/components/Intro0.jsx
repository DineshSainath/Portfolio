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
          <div className="tb center">
            <table className="links" cellPadding="10">
              <tbody>
                <tr>
                  <td>
                    <a href="google.com">
                      <PdfIcon
                        className="icon"
                        color="primary"
                        style={{ fontSize: "40px" }}
                      />
                    </a>
                  </td>
                  <td>
                    <a href="github.com/DineshSainath">
                      <GitHubIcon
                        className="icon"
                        color="primary"
                        style={{ fontSize: "40px" }}
                      />
                    </a>
                  </td>
                  <td>
                    <a href="linkedin.com/in/dineshsainath/">
                      <LinkedInIcon
                        className="icon"
                        color="primary"
                        style={{ fontSize: "40px" }}
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="platform">Resume</td>
                  <td className="platform">Github</td>
                  <td className="platform">LinkedIn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
