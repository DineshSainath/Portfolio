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
        <ul className="list-inline ">
          <li className="list-inline-item mx-5 icon">
            <DiHtml5 size={60} /> <p className="text-center">Html</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <DiCss3 size={60} /> <p className="text-center">CSS</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <DiNodejsSmall size={60} /> <p className="text-center">NodeJs</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <SiC size={50} /> <p className="text-center">C</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <SiCplusplus size={60} /> <p className="text-center">C++</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <DiReact size={60} /> <p className="text-center">React</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <DiJava size={60} /> <p className="text-center">Java</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <DiMysql size={60} /> <p className="text-center">MySql</p>
          </li>
          <li className="list-inline-item mx-5 icon">
            <DiMongodb size={60} /> <p className="text-center">MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
