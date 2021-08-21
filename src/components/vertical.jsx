import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import ComputerIcon from "@material-ui/icons/Computer";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Vertical() {
  return (
    <div position="absolute" white-space="normal" display="block">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(84, 81, 81)" }}
          date="August 2021"
          iconStyle={{ background: "rgb(232, 227, 227)", color: "black" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Keeper</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Web Application
          </h5>
          <p>A React based note-keeper app similar to Google keep</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2021"
          contentStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(84, 81, 81)" }}
          dateClassName="vertical-date"
          iconStyle={{ background: "rgb(232, 227, 227)", color: "black" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">To Do List</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Web Application
          </h5>
          <p>
            A to-do-list application constructed with Node Js with a back-end
            database on MongoDB
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2021"
          contentStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(84, 81, 81)" }}
          dateClassName="vertical-date"
          iconStyle={{ background: "rgb(232, 227, 227)", color: "black" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Personal Blog</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Web Application
          </h5>
          <p>
            A minimalistic blog website built using Node Js to compose and
            manage posts
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2021"
          contentStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(84, 81, 81)" }}
          dateClassName="vertical-date"
          iconStyle={{ background: "rgb(232, 227, 227)", color: "black" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">Drum kit</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Javascript application
          </h5>
          <p>Uses keys to play sounds and create music</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2020"
          contentStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(84, 81, 81)" }}
          dateClassName="vertical-date"
          iconStyle={{ background: "rgb(232, 227, 227)", color: "black" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">E store</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Data application
          </h5>
          <p>
            A Java based e-store application, integrated using Hashmaps, GUI and
            exception handling
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2020"
          contentStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(84, 81, 81)" }}
          dateClassName="vertical-date"
          iconStyle={{ background: "rgb(232, 227, 227)", color: "black" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Adventure Game</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Java Application
          </h5>
          <p>A text-based Java game that uses Object Oriented Approach</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement id="workScroll"
          iconStyle={{ background: "black", color: "white" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Vertical;
