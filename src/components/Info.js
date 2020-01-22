import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div className="Info AppComponent">
        <div className="infoText">
          <p>
            This{" "}
            <a
              href="https://github.com/keskiviikko/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              portfolio
            </a>{" "}
            was made with{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://react-bootstrap.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Bootstrap
            </a>{" "}
            and{" "}
            <a
              href="https://www.heroku.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroku
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
