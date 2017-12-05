import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>EDUCATION</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Bina Nusantara University</h3>
                <p className="info">
                  Bachelor of Information System <span>&bull;</span>{" "}
                  <em className="date">2013 - 2017</em>
                </p>
                <br /> <br />
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>Impact Byte Coding Bootcamp</h3>
                <p className="info">
                  Coding Bootcamp with javascript environment<span>&bull;</span>{" "}
                  <em className="date">August - november 2017</em>
                </p>
                <br /> <br />
              </div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>SKILLS</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                <li>
                  <span className="bar-expand html5" />
                  <em>HTML & CSS</em>
                </li>
                <li>
                  <span className="bar-expand jquery" />
                  <em>jQuery</em>
                </li>
                <li>
                  <span className="bar-expand photoshop" />
                  <em>NODE.JS</em>
                </li>
                <li>
                  <span className="bar-expand illustrator" />
                  <em>React</em>
                </li>
                <li>
                  <span className="bar-expand wordpress" />
                  <em>Android</em>
                </li>
                <li>
                  <span className="bar-expand wordpress" />
                  <em>Java</em>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
