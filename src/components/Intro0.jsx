import React from 'react'
import Typed from 'react-typed'
import './styles.css'
import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import GitHubIcon from '@material-ui/icons/GitHub'
import PdfIcon from '@material-ui/icons/PictureAsPdf'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Resume from './Resume.pdf'
import './Intro.css'

import { AiOutlineGithub, AiOutlineFilePdf } from 'react-icons/ai'

function Intro() {
  return (
    <div className="intro-content display-table">
      {/* <div className="table-cell"> */}
      <div className="container">
        <h1 className="intro-title">
          Hello, I'm <span className="titleName"> Dinesh Sainath </span>
        </h1>
        <p className="intro-subtitle">
          <span className="text-slider-items"></span>
          <strong className="text-slider">
            <Typed
              strings={['Front End Developer']}
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
