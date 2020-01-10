import React, { Component } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="imgContainer">
          <img
            src="images/photo.jpg"
            alt="that's me"
            height="150"
            width="150"
          />
          <OverlayTrigger
            key="github"
            placement="top"
            overlay={<Tooltip id={"tooltip-github"}>GitHub</Tooltip>}
          >
            <a
              href="https://github.com/keskiviikko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/github-icon.png"
                alt="github"
                height="30"
                width="30"
              />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            key="linkedin"
            placement="top"
            overlay={<Tooltip id={"tooltip-linkedin"}>LinkedIn</Tooltip>}
          >
            <a
              href="https://www.linkedin.com/in/rasmus-rajasalo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/linkedin-icon.png"
                alt="linkedin"
                height="30"
                width="30"
              />
            </a>
          </OverlayTrigger>
        </div>

        <div className="timeline">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                About
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Open to job opportunities! Recently graduated from Academy's
                  12 week Accelerated Learning program in JavaScript.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Experience
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <h3>Academy | Academic Work</h3>
                  <h4>Junior IT Consultant</h4>I completed Academy's
                  AcceleratedLearning Programin JavaScript. Accelerated Learning
                  is a fastway to a new career for ambitious and driven
                  individuals withthe right skills to acquire new knowledge. The
                  educationmethod focuses on high-speed practical learning,
                  agileteamwork and continuous feedback dialogue. The education
                  isalways based on specific tasks relevant to the
                  professionalrole. This makes the learning process extremely
                  efficient andconsultants can contribute as junior IT
                  consultants from thefirst day after the training.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Education
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Licenses & Certifications
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <OverlayTrigger
                            key="scrum"
                            placement="top"
                            overlay={
                              <Tooltip id={"tooltip-scrum"}>Scrum.org</Tooltip>
                            }
                          >
                            <a
                              href="https://www.scrum.org/user/577137"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="images/badge-psmi.png"
                                alt="scrum master"
                                width="30"
                              />
                            </a>
                          </OverlayTrigger>
                        </td>
                        <td>Professional Scrum Master I</td>
                        <td>Issued Oct 2019</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                Interests
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}
