import React from "react";
import {
  DiHtml5,
  DiNodejsSmall,
  DiCss3,
  DiMysql,
  DiMongodb,
  DiReact,
  DiJava
} from "react-icons/di";

import { SiC, SiCplusplus } from "react-icons/si";

function Skills() {
  return (
    <section className="skills">
      <h3>S K I L L S</h3>
      <div className="container-fluid">
      <div className="row">
        <ul className="list-inline mx-auto justify-content-center">
          <li className="list-inline-item mx-4 icon">
            <DiHtml5 size={50} /> <p className="text-center">Html</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <DiCss3 size={50} /> <p className="text-center">CSS</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <DiNodejsSmall size={50} /> <p className="text-center">NodeJs</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <SiC size={50} /> <p className="text-center">C</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <SiCplusplus size={50} /> <p className="text-center">C++</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <DiReact size={50} /> <p className="text-center">React</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <DiJava size={50} /> <p className="text-center">Java</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <DiMysql size={50} /> <p className="text-center">MySql</p>
          </li>
          <li className="list-inline-item mx-4 icon">
            <DiMongodb size={50} /> <p className="text-center">MongoDB</p>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
