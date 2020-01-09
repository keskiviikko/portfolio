import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div id="headerContainer">
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
                            <h5>BLARGON 7 - A Space Shooter Game -</h5><br />
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Used technologies</th>
                                        <th>Rasmus's roles in this project</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>REST API Design</li>
                                                <li>Phaser 3 (Phaser Game Framework)</li>
                                                <li>JavaScript, HTML5</li>
                                                <li>Node.js, Express</li>
                                                <li>MongoDB</li>
                                                <li>Android Studio</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Front-end developer</li>
                                                <li>Game designer</li>
                                                <li>Game programmer</li>
                                                <li>Game tester</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <a href="https://github.com/LValtanen/Spaceshooter" target="_blank" rel="noopener noreferrer">GitHub</a><br /><br />
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}
