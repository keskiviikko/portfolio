import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div>
                    Rasmus has finished Academy’s JavaScript program. During the course, he has, for example, taken part in the following projects:
                </div><br />
                <div className="blargon">
                    BLARGON 7 - A Space Shooter Game <br />
                    <a href="https://github.com/LValtanen/Spaceshooter" target="_blank" rel="noopener noreferrer">GitHub</a><br />
                    Technologies: REST API Design, Phaser 3 (Phaser Game Framework), JavaScript, HTML5, Node.js, Express, MongoDB, Android Studio<br />
                    Roles in this project: Front-end developer, Game designer, Game programmer, Game tester <br />
                    <video height="400" autoPlay loop muted>
                        <source src="videos/blargon7.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        )
    }
}
