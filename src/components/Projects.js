import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div className="headerContainer">
                    <p>Rasmus has finished Academy’s JavaScript program. During the course, he has, for example, taken part in the following projects:</p>
                </div><br />
                <Container>
                    <Row id="blargon">
                        <Col>
                            <video height="400" autoPlay loop muted>
                                <source src="videos/blargon7.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                        <Col>
                            <div className="animatedTitle">
                                <a href="https://github.com/LValtanen/Spaceshooter" target="_blank" rel="noopener noreferrer">BLARGON 7 - A Space Shooter Game -</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Technologies used</th>
                                        <th>Rasmus's roles in this project</th>
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
                                        <td>Android Studio</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="imgContainer">
                                <OverlayTrigger
                                    key='github'
                                    placement='top'
                                    overlay={
                                        <Tooltip id={"tooltip-github"}>
                                            GitHub
                                        </Tooltip>
                                    }
                                >
                                    <a href="https://github.com/LValtanen/Spaceshooter/tree/rasmus" target="_blank" rel="noopener noreferrer">
                                        <img src="images/github-icon.png" alt="github" height="30" width="30" />
                                    </a>
                                </OverlayTrigger>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}
