import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <div>
        <h2 className="header">Portfolio</h2>
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/skills">
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/projects">
              Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/about" component={Profile} /> {/* Change this later */}
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
