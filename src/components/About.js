import React, { Component } from 'react'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default class About extends Component {
    render() {
        return (
            <div>
                <div id="imgContainer">
                    <img src="images/photo.jpg" alt="that's me" height="150" width="150" />
                    <OverlayTrigger
                        key='github'
                        placement='top'
                        overlay={
                            <Tooltip id={"tooltip-github"}>
                                GitHub
                            </Tooltip>
                        }
                    >
                        <a href="https://github.com/keskiviikko" target="_blank" rel="noopener noreferrer">
                            <img src="images/github-icon.png" alt="github" height="30" width="30" />
                        </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key='linkedin'
                        placement='top'
                        overlay={
                            <Tooltip id={"tooltip-linkedin"}>
                                LinkedIn
                            </Tooltip>
                        }
                    >
                        <a href="https://www.linkedin.com/in/rasmus-rajasalo/" target="_blank" rel="noopener noreferrer">
                            <img src="images/linkedin-icon.png" alt="linkedin" height="30" width="30" />
                        </a>
                    </OverlayTrigger>
                </div>
                <div>
                    Rasmus has completed Academy's Accelerated Learning Programin JavaScript. Accelerated Learning is a fast way to a new career for ambitious and driven individuals with the right skills to acquire new knowledge. The education method focuses on high-speed practical learning, agile teamwork and continuous feedback dialogue. The education is always based on specific tasks relevant to the professional role. This makes the learning process extremely efficient and consultants can contribute as junior IT consultants from the first day after the training.
                </div><br />
                <div>
                    <h3>Licenses & Certifications</h3>
                    <OverlayTrigger
                        key='scrum'
                        placement='top'
                        overlay={
                            <Tooltip id={"tooltip-scrum"}>
                                Scrum.org
                            </Tooltip>
                        }
                    >
                        <a href="https://www.scrum.org/user/577137" target="_blank" rel="noopener noreferrer">
                            <img src="images/badge-psmi.png" alt="scrum master" width="30" />
                        </a>
                    </OverlayTrigger>
                    Professional Scrum Master I
                </div>
            </div>
        )
    }
}
