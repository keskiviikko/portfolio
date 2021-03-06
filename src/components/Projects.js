import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '' };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      color: !state.color
    }));
  }

  render() {
    return (
      <div>
        <div className="headerContainer">
          <p>I have taken part in the following projects:</p>
        </div>
        <br />
        <Container>
          <Row className="row">
            <Col className="columnVideo">
              <div className="projectTitle">
                <div className="animatedTitle">
                  {/* This should be AWS link */}
                  <a
                    href="https://github.com/LValtanen/Spaceshooter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BLARGON 7
                  </a>
                </div>
              </div>
              <video width="350" autoPlay loop muted playsInline>
                <source src="videos/blargon7-android.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col className="column">
              <div className="introText">
                <p>
                  Arcade space shooter game for Android and browsers. Includes
                  user sign up and a global high-score list. Our team's final
                  project at Academy's web development boot camp.
                </p>
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
                    <td>User authentication</td>
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
                  placement="right"
                  overlay={
                    <Tooltip className={'tooltip-github'}>GitHub</Tooltip>
                  }
                >
                  <a
                    href="https://github.com/LValtanen/Spaceshooter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/github-icon.png"
                      alt="github"
                      height="35"
                      width="35"
                    />
                  </a>
                </OverlayTrigger>
                <OverlayTrigger
                  key="apk"
                  placement="right"
                  overlay={
                    <Tooltip className={'tooltip-apk'}>
                      Download APK file (Android)
                    </Tooltip>
                  }
                >
                  <a
                    href="https://drive.google.com/file/d/1WJ5xt6A18TrtFGL2OKd8YymTNk9OwaBS/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      id="apk"
                      src="images/app-icon.png"
                      alt="apk"
                      height="35"
                      width="35"
                    />
                  </a>
                </OverlayTrigger>
                {/* <OverlayTrigger
                  key="apk"
                  placement="right"
                  trigger="click"
                  overlay={
                    <Tooltip className={'tooltip-apk-tbr'}>APK (TBR)</Tooltip>
                  }
                >
                  <img
                    id="apktbr"
                    src="images/app-icon.png"
                    alt="apk"
                    height="35"
                    width="35"
                    style={{ backgroundColor: this.state.color ? 'red' : '' }}
                    onClick={this.handleClick}
                  />
                </OverlayTrigger> */}
              </div>
            </Col>
          </Row>
          <br />
          <Row className="row">
            <Col className="columnVideo">
              <div className="projectTitle">
                <div className="animatedTitle">
                  <a
                    href="https://keskiviikko.github.io/jsjunat/html/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Train Timetable Search
                  </a>
                </div>
              </div>
              <img
                src="images/js-junat.png"
                alt="train timetables"
                width="350"
                className="projectImg"
              />
              {/* <video width="350" autoPlay loop muted playsInline>
                <source src="videos/junat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </Col>
            <Col className="column">
              <div className="introText">
                <p>
                  A three-day front-end mini-project at Academy. Users can look
                  for train schedules using Digitraffic's open railway traffic
                  data.
                </p>
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
                    <td>Digitraffic APIs</td>
                    <td>Front-end Developer</td>
                  </tr>
                  <tr>
                    <td>Geolocation API</td>
                  </tr>
                  <tr>
                    <td>JavaScript, HTML5</td>
                  </tr>
                  <tr>
                    <td>CSS, Bootstrap</td>
                  </tr>
                  <tr>
                    <td>User authentication</td>
                  </tr>
                </tbody>
              </table>
              <div className="iconContainer">
                <OverlayTrigger
                  key="github"
                  placement="right"
                  overlay={<Tooltip id={'tooltip-github'}>GitHub</Tooltip>}
                >
                  <a
                    href="https://github.com/keskiviikko/jsjunat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/github-icon.png"
                      alt="github"
                      height="35"
                      width="35"
                    />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}
