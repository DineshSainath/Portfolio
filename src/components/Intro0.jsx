import React, { useState, useEffect } from 'react'
import Typed from 'react-typed'
import './styles.css'
import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import GitHubIcon from '@material-ui/icons/GitHub'
import PdfIcon from '@material-ui/icons/PictureAsPdf'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Resume from './Resume.pdf'
import './Intro.css'

function Intro() {
  return (
    <div className="intro-content display-table">
      {/* <div className="table-cell"> */}
      <div className="container">
        <p className="intro-title">
          <p className="hello"> Hello, I'm </p>{' '}
          <p className="titleName">Dinesh Sainath</p>
        </p>
        <p className="intro-subtitle">
          <span className="text-slider-items"></span>
          <strong className="text-slider">
            <Typed
              className="rolling-text"
              strings={[
                `I'm a Front End Developer.`,
                `I build applications for the web.`,
              ]}
              typeSpeed={30}
              backDelay={1500}
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
                  <a className="iconLink" href={Resume} target="_blank">
                    <ToolTip title="Resume">
                      {/* <AiOutlineFilePdf className="icon" color="gray" size="50px" /> */}
                      <IconButton>
                        <PdfIcon
                          className="icon"
                          color="primary"
                          style={{ fontSize: '50px' }}
                        />
                      </IconButton>
                    </ToolTip>
                  </a>
                </td>
                <td>
                  <a
                    className="iconLink"
                    href="https://github.com/DineshSainath"
                    target="_blank"
                  >
                    <ToolTip title="Github">
                      <IconButton>
                        <GitHubIcon
                          className="icon"
                          color="primary"
                          style={{ fontSize: '50px' }}
                        />{' '}
                      </IconButton>
                    </ToolTip>
                  </a>
                </td>
                <td id="skillsScroll">
                  <a
                    className="iconLink"
                    href="https://linkedin.com/in/dineshsainath/"
                    target="_blank"
                  >
                    <ToolTip title="LinkedIn">
                      <IconButton>
                        <LinkedInIcon
                          className="icon"
                          color="primary"
                          style={{ fontSize: '50px' }}
                        />{' '}
                      </IconButton>
                    </ToolTip>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Intro
