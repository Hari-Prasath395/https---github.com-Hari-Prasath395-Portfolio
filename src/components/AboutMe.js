import { useState } from "react";
import "./AboutMe.css";

import HtmlImg from "../assets/HTML5.png";
import CssImg from "../assets/css.png";
import JSImg from "../assets/JavaScript-logo.png";
import ReactImg from "../assets/React-icon.png";
import MySqlImg from "../assets/mysql.png";
import MongoDbImg from "../assets/Mongo.png";
import NodeJsImg from "../assets/node-js.jpg";
import JavaImg from "../assets/java.png";
import SeleniumImg from "../assets/Selenium_Logo.png";
import TestNGImg from "../assets/TestNg.png";
import CucumberImg from "../assets/Cucumber.png";
import RallyImg from "../assets/Rally.png";

import { FaSchool } from "react-icons/fa";

function AboutMe() {
  const skills = [
    { name: "HTML", img: HtmlImg, percent: 70, alt: "Html-Img" },
    { name: "CSS", img: CssImg, percent: 70, alt: "css-Img" },
    { name: "JS", img: JSImg, percent: 60, alt: "Js-Img" },
    { name: "React", img: ReactImg, percent: 60, alt: "React-Img" },
    { name: "MySql", img: MySqlImg, percent: 50, alt: "Sql-Img" },
    { name: "Mongodb", img: MongoDbImg, percent: 65, alt: "Mongo-Img" },
    { name: "Node.js", img: NodeJsImg, percent: 50, alt: "Node-Img" },
    { name: "Java", img: JavaImg, percent: 60, alt: "Node-Img" },
    { name: "Selenium", img: SeleniumImg, percent: 70, alt: "Selenium-Img" },
    { name: "TestNg", img: TestNGImg, percent: 70, alt: "test-ng-Img" },
    { name: "Cucumber", img: CucumberImg, percent: 70, alt: "cucumber-Img" },
    { name: "Rally", img: RallyImg, percent: 70, alt: "Rally-Img" },
  ];

  const education = [
    {
      name: "10-th Standard Grade",
      Institute: "SMHSS-DPI",
      year: 2010,
      percent: "84.8",
    },
    {
      name: "12-th Standard Grade",
      Institute: "SMHSS-DPI",
      year: 2012,
      percent: "87.5",
    },
    {
      name: "Mechanical Engineering",
      Institute: "SSIET-COVAI",
      year: 2016,
      percent: "75",
    },
  ];

  return (
    
    <div className="about-me">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-details text-center">
              <span className="skill-icon">
                {" "}
                <img src={skill.img} alt={skill.alt} />{" "}
              </span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
          </div>
        ))}
      </div>
      <h2>Education</h2>
      <div className="education">
        {education.map((edu) => (
          <div className="education-item" key={edu.name}>
            <span className="education-name">
              <FaSchool style={{ marginRight: "0.5rem" }} />
              {edu.name}
            </span>
            <span className="education-year">{edu.Institute}</span>
            <span className="education-year">{edu.year}</span>
            <span className="education-percent">{edu.percent}%</span>
          </div>
        ))}
      </div>
      <h2>Professional Details</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Duration : 2016-2017
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>Preparation for Competitive Exams.</strong> I spent my
              time preparing for various competitive exams such as group exams,
              railway exams, and SSC exams, in order to advance my career
              opportunities.Despite my efforts, I unfortunately did not pass any
              of the exams I was preparing for during that time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Duration : 2018-2020
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>Key-Jay Forgings Pvt Ltd (Hosur).</strong> During the
              period, I worked as a contractor in the role of a CNC operator.
              This experience allowed me to gain valuable insights into the
              manufacturing industry and develop my technical skills.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Duration : 2021-2022
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>PRIMUS GLOBAL TECHNOLOGIES PVT LTD-BANGALORE.</strong> I
              worked as a software test engineer at Cognizant as a contractor,
              and my payroll company was Primus Global Technologies. During this
              time, I learned about software testing life cycle (STLC),
              regression testing, black box testing, and various other testing
              tools.
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default AboutMe;
