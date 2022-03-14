import React from 'react';
//import resume from "../../assets/resume/resume.pdf"
import resumeImage from "../../assets/images/resume.JPG"

export default function Resume() {
  return (
    <div>
      <div class="jumbotron">
        <h1 class="d-flex display-5 justify-content-center mb-5">Resume!</h1>
      </div>
      <div className="container justify-content-center">
        <div class="row">
          <div class="col">
            <h2 className="">Front-End</h2>
            <ul className="">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
            </ul>
          </div>
          <div class="col">
            <h2 className="">Back-End</h2>
            <ul className="">
              <li>APIs</li>
              <li>REST</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySql</li>
              <li>Sequalize</li>
              <li>Mongo</li>
              <li>Mongoose</li>
              <li>React</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div class="col">
            <h2 className="">
            {/* <a href={resume} download>Resume Download</a> */}
            </h2>
            <img src={resumeImage} width="1000"alt="connor hollis resume" />
          </div>

        </div>
      </div>
    </div>





  );
}
