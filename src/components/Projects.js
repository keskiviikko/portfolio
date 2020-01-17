import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="headerContainer">
          <p>
            I've finished Academy’s Full-Stack Web Development program. During
            the course, I have, for example, taken part in the following
            projects:
          </p>
        </div>
        <br />
        <Container>
          <Row className="row">
            <Col className="columnVideo" lg={5}>
              <div className="projectTitle">
                <div className="animatedTitle">
                  <a
                    href="https://github.com/LValtanen/Spaceshooter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BLARGON 7
                  </a>
                </div>
              </div>
              <video height="400" autoPlay loop muted playsInline>
                <source src="videos/blargon7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col className="column" lg={6}>
              <div className="introText">
                <p>Arcade space shooter game for Android and browsers.</p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Technologies used</th>
                    <th>My roles in this project</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>REST API Design</td>
                    <td>Full Stack Developer</td>
                  </tr>
                  <tr>
                    <td>Phaser 3 (Phaser Game Framework)</td>
                    <td>Game Designer</td>
                  </tr>
                  <tr>
                    <td>JavaScript, HTML5</td>
                    <td>Game Programmer</td>
                  </tr>
                  <tr>
                    <td>Node.js, Express</td>
                    <td>Game Tester</td>
                  </tr>
                  <tr>
                    <td>MongoDB</td>
                  </tr>
                  <tr>
                    <td>Android Studio, Apache Cordova</td>
                  </tr>
                  <tr>
                    <td>AWS</td>
                  </tr>
                </tbody>
              </table>
              <div className="iconContainer">
                <OverlayTrigger
                  key="github"
                  placement="left"
                  overlay={<Tooltip id={"tooltip-github"}>GitHub</Tooltip>}
                >
                  <a
                    href="https://github.com/LValtanen/Spaceshooter"
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
