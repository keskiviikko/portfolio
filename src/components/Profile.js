import React, { Component } from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="row">
            <Col className="column" lg={3}>
              <div className="imgContainer">
                <img
                  src="images/photo-2.jpg"
                  alt="that's me"
                  height="170"
                  width="170"
                />
                <div className="info">
                  <h4>Rasmus Rajasalo</h4>
                  <p>Junior Developer</p>
                </div>
                <OverlayTrigger
                  key="github"
                  placement="left"
                  overlay={
                    <Tooltip className={"tooltip-github"}>GitHub</Tooltip>
                  }
                >
                  <a
                    href="https://github.com/keskiviikko"
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
                  key="linkedin"
                  placement="right"
                  overlay={
                    <Tooltip className={"tooltip-linkedin"}>LinkedIn</Tooltip>
                  }
                >
                  <a
                    href="https://www.linkedin.com/in/rasmus-rajasalo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/linkedin-icon.png"
                      alt="linkedin"
                      height="35"
                      width="35"
                    />
                  </a>
                </OverlayTrigger>
              </div>
              <div className="scrumBadge">
                <OverlayTrigger
                  key="scrum"
                  placement="right"
                  overlay={
                    <Tooltip className={"tooltip-scrum"}>Scrum.org</Tooltip>
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
                      width="35"
                    />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col className="column" lg={8}>
              <div className="workExperience">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Elevator pitch
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                          <i>
                            Open to job opportunities! Recently finished
                            Academy's 12-week Accelerated Learning Program in
                            full-stack web development.
                          </i>
                        </p>
                        <p>
                          I'm a natural problem solver. I won’t be stopped by
                          incomprehensible code, computer errors, philosophical
                          dilemmas or tough situations. I'm a highly organised
                          person. My strengths are my professionalism and my
                          ability to learn quickly and intuitively. I'm a
                          diligent employee and a reliable colleague.{" "}
                        </p>
                        <p>
                          My current goal is to take the next big step in my
                          career in ICT industry as a junior developer. I'm
                          motivated by the industry’s immense possibilities and
                          challenges. I'm also skilled at composing written
                          material, I have great presentation skills and I am a
                          certified Scrum Master.
                        </p>
                        <p>
                          You can find my contact information{" "}
                          <a
                            href="https://www.linkedin.com/in/rasmus-rajasalo/detail/contact-info/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            here
                          </a>
                          .
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
                          scheduler for Berlitz in Tokyo and Osaka. I was
                          responsible for conducting business English lessons at
                          Berlitz Language Centers and language courses for
                          various out-service locations such as schools and
                          universities. The business lessons included business
                          communication coaching. I also took care of weekend
                          scheduling for several language centers. I received
                          praise for high customer satisfaction and for my
                          professionalism.
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
                          completely new, extremely busy and at times even
                          stressful conditions, found out new ways to cooperate
                          and came up with practical solutions to urgent
                          problems. I also learned valuable curriculum
                          development skills and organized courses and classes
                          for hundreds of asylum seekers. My lessons provided
                          much needed purpose and motivation for them.
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
                          I've completed Academy's Accelerated Learning Program
                          in web development. Accelerated Learning is a fast way
                          to a new career for ambitious and driven individuals
                          with the right skills to acquire new knowledge. The
                          education method focuses on high-speed practical
                          learning, agile teamwork and continuous feedback
                          dialogue. The education is always based on specific
                          tasks relevant to the professional role. This makes
                          the learning process extremely efficient and
                          consultants can contribute as junior IT consultants
                          from the first day after the training.
                        </p>
                        <p className="jsprogram">Program contents:</p>
                        <p>
                          Week 1: HTML5, CSS, JavaScript, APIs, XHR, jQuery,
                          DOM, regex
                        </p>
                        <p>
                          Week 2: Responsive web, ES6+, Node.js, Express, REST
                        </p>
                        <p>Weeks 2–9: Business communication</p>
                        <p>Week 3: Git, GitHub, TDD, Testing & Node.js, Pug</p>
                        <p>Week 4: Scrum, 1st project week</p>
                        <p>Week 5: Databases, SQL, MongoDB, UX</p>
                        <p>Week 6: React, React Bootstrap, React Hooks</p>
                        <p>
                          Week 7: Angular, TypeScript, Data visualization, PWAs
                        </p>
                        <p>Week 8: OWASP, 2nd project week</p>
                        <p>Week 9: AWS fundamentals</p>
                        <p>
                          Week 10: API Design, React Native, Redux, Vue.js,
                          Security
                        </p>
                        <p>Weeks 11–12: Final project</p>

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
                          I have graduated as a Bachelor of Arts in Japanese
                          Language and Culture from the Department of Asian,
                          Middle Eastern and Turkish Studies of Stockholm
                          University. I received an excellent grade for my
                          Bachelor’s Thesis, which I wrote in English,
                          concerning the Disability Rights Movement in postwar
                          Japan. The three-year programme consisted of Japanese
                          Language courses (including grammar, kanji and spoken
                          Japanese classes) and various courses regarding
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
                        <h3>Tools & Technologies</h3>
                        <h4>Web Development</h4>
                        <p>
                          HTTP/HTTPS and APIs, CLI (Terminal, cmd), JavaScript
                          Algorithms and Data Structures, regex, DevTools, TDD
                          (Jest, Enzyme, Jasmine), Web Security (OWASP, CORS,
                          HTTPS), AWS fundamentals
                        </p>
                        <h4>Front-end</h4>
                        <p>
                          HTML5, CSS (layouts, responsive design, Bootstrap,
                          Material-UI), JavaScript (ES6+, Fetch API, Ajax,
                          jQuery), Package managers (npm, yarn), Build Tools,
                          Frameworks (React, Angular, Vue.js), TypeScript,
                          Mobile Applications (React Native, Android Studio),
                          Data visualization (amCharts)
                        </p>
                        <h4>Back-end</h4>
                        <p>
                          Node.js (npm, yarn, Express), Ruby (RubyGems, Ruby on
                          Rails), Databases (PostgreSQL, MongoDB), REST API
                          Design (Postman), Authentication
                        </p>
                        <h4>Project Management</h4>
                        <p>Git, GitHub, Bitbucket, Scrum</p>
                        <br />
                        <h3>Languages</h3>
                        <h4>Finnish</h4>
                        <p>Native proficiency</p>
                        <h4>English</h4>
                        <p>Full professional proficiency</p>
                        <h4>Japanese</h4>
                        <p>Professional working proficiency</p>
                        <br />
                        <Link to="/skills">
                          Skills as a collapsible force-directed tree.
                        </Link>
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
                              <td className="animatedTitle">
                                <a
                                  href="https://www.scrum.org/user/577137"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Professional Scrum Master I
                                </a>
                              </td>
                              <td>Issued Oct 2019</td>
                            </tr>
                            <tr>
                              <td className="animatedTitle">
                                <a
                                  href="https://www.ets.org/toeic/organizations/listening-reading/about"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  TOEIC Listening & Reading
                                </a>
                              </td>
                              <td>Test date Mar 2017</td>
                              <td>Total score 990/990</td>
                            </tr>
                          </tbody>
                        </table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      Testimonials
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <p>
                          "According to his supervisor, Mr. Rajasalo was
                          friendly, polite, outgoing and professional in his
                          dealings with customers and colleagues during his time
                          with Berlitz."
                        </p>
                        <p>
                          "Mr. Rajasalo has discharged his duties diligently to
                          our great satisfaction showing accuracy,
                          trustworthiness, and ability to cooperate. We warmly
                          recommend him for similar employment."
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                      Interests
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>
                        Reading (currently His Dark Materials), board games, history and floorball. And
                        Bloodborne.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <Info />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
