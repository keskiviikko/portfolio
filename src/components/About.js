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
                Elevator pitch
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>
                    Open to job opportunities! Recently graduated from Academy's
                    12 week Accelerated Learning program in JavaScript.
                  </p>
                  <p>
                    I'm a natural problem solver. I won’t be stopped by
                    incomprehensible code, computer errors, philosophical
                    dilemmas or tough situations. I'm a highly organised person.
                    My strengths are my professionalism and my ability to learn
                    quickly and intuitively. I'm a diligent employee and a
                    reliable colleague. My goal is to get my career started in
                    IT industry as a junior developer. I'm motivated by the
                    industry’s immense possibilities and challenges. I'm also
                    skilled at composing written material and I have great
                    presentation skills.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Experience
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <h3 className="animatedTitle">
                    <a
                      href="https://www.aw.com/academic-work/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Academic Work
                    </a>
                  </h3>
                  <h4>Junior IT Consultant · Full-time</h4>
                  <h5>Jan 2019 – </h5>
                  <p>In-house IT Consultant.</p>
                  <br />
                  <h3 className="animatedTitle">
                    <a
                      href="https://teach.berlitz.co.jp/professional_teaching_environment/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Berlitz Japan
                    </a>
                  </h3>
                  <h4>Language Instructor · Full-time</h4>
                  <h5>May 2017 – May 2019</h5>
                  <p>
                    I worked as an English language instructor and weekend
                    scheduler for Berlitz in Tokyo and Osaka. I was responsible
                    for conducting business English lessons at Berlitz Language
                    Centers and language courses for various out-service
                    locations such as schools and universities. The business
                    lessons included business communication coaching. I also
                    took care of weekend scheduling for several language
                    centers. I received praise for high customer satisfaction
                    and for my professionalism.
                  </p>
                  <br />
                  <h3 className="animatedTitle">
                    <a
                      href="https://www.linkedin.com/company/luona-oy/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Luona
                    </a>
                  </h3>
                  <h4>Language Teacher · Full-time</h4>
                  <h5>Jun 2016 – Sep 2016</h5>
                  <p>
                    Full-time language teacher at Luona's asylum reception
                    centre in Espoo. In this job I learned how to adapt to
                    completely new, extremely busy and at times even stressful
                    conditions, found out new ways to cooperate and came up with
                    practical solutions to urgent problems. I also learned
                    valuable curriculum development skills and organized courses
                    and classes for hundreds of asylum seekers. My lessons
                    provided much needed purpose and motivation for them.
                  </p>
                  <br />
                  <p>
                    Please see my{" "}
                    <a
                      href="https://www.linkedin.com/in/rasmus-rajasalo/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>{" "}
                    page for more experience.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Education
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <h3 className="animatedTitle">
                    <a
                      href="https://www.academy.fi/academysta/what-is-academy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Academy | Academic Work
                    </a>
                  </h3>
                  <h4>Junior IT Consultant</h4>
                  <h5>2019</h5>
                  <p>
                    I completed Academy's Accelerated Learning Program in
                    JavaScript. Accelerated Learning is a fast way to a new
                    career for ambitious and driven individuals with the right
                    skills to acquire new knowledge. The education method
                    focuses on high-speed practical learning, agile teamwork and
                    continuous feedback dialogue. The education is always based
                    on specific tasks relevant to the professional role. This
                    makes the learning process extremely efficient and
                    consultants can contribute as junior IT consultants from the
                    first day after the training.
                  </p>
                  <br />
                  <h3 className="animatedTitle">
                    <a
                      href="https://www.su.se/asia/english/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stockholm University
                    </a>
                  </h3>
                  <h4>Bachelor's degree</h4>
                  <h5>2013 – 2016</h5>
                  <p>
                    I have graduated as a Bachelor of Arts in Japanese Language
                    and Culture from the Department of Asian, Middle Eastern and
                    Turkish Studies of Stockholm University. I received an
                    excellent grade for my Bachelor’s Thesis, which I wrote in
                    English, concerning the Disability Rights Movement in
                    postwar Japan. The three-year programme consisted of
                    Japanese Language courses (including grammar, kanji and
                    spoken Japanese classes) and various courses regarding
                    Japan’s history, society and culture.
                  </p>
                  <br />
                  <h3 className="animatedTitle">
                    <a
                      href="https://www.helsinki.fi/en/faculty-of-social-sciences"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      University of Helsinki
                    </a>
                  </h3>
                  <h4>No degree</h4>
                  <h5>2011 – 2013</h5>
                  <p>
                    Social and Moral Philosophy in the Faculty of Social
                    Sciences.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Skills
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <h3>Languages</h3>
                  <h4>Finnish</h4>
                  <p>Native proficiency</p>
                  <h4>English</h4>
                  <p>Full professional proficiency</p>
                  <h4>Japanese</h4>
                  <p>Professional working proficiency</p>
                  <br />
                  <h3>Tools & Technologies</h3>
                  <h4>Web development</h4>
                  <p>
                    Git, GitHub, HTTP / HTTPS, APIs, Terminal, Windows Console,
                    JavaScript Algorithms and Data Structures, regex, DevTools,
                    Package Managers, TDD, AWS
                  </p>
                  <h4>Front-end</h4>
                  <p>
                    HTML, CSS, JavaScript, TypeScript, jQuery, Bootstrap, Build
                    Tools, ReactJS, React Native, Angular, Vue.js, Testing
                    (Jest, Enzyme)
                  </p>
                  <h4>Back-end</h4>
                  <p>
                    REST API Design, Node.js (npm, yarn), Express, Ruby
                    (RubyGems), Ruby on Rails, PostgreSQL, MongoDB, CRUD, JWT,
                    Postman, Testing (Jest, Jasmine)
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                Licenses & Certifications
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
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
                        <td>(Issued Oct 2019)</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                Interests
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}
