import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import docOck from "../../Assets/Projects/home.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docOck}
              isBlog={false}
              title="Mindcradle"
              description="MindCradle is an innovative solution designed to overcome geographical constraints, bridge language divides, streamline medical record management, and improve medication adherence. By integrating advanced technologies such as remote consultation services, multilingual support, secure record storage, and personalized medication reminders, our platform aims to revolutionize healthcare delivery."
              demoLink="https://github.com/Ayush63553/Mindcradle"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fine Dine"
              description="A restaurant booking web application that provides the user a list of restaurants that they can look for in the pool of restaurants of various cuisines. The distance and location is provided based on the current location of the user and the restaurant. A user can open a new restaurant and add it to the pool of items. there can be multiple bookings for multiple people, at different times."
              demoLink="https://github.com/Ayush63553/FineDine"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stock Market Predictor"
              description="A python application that gives the user the predicted price data for the next day using tensorflow"
              demoLink="https://github.com/Ayush63553/Stock_Market_Predictor"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Music Store Applicaton"
              description="A MERN stack application that provides the user the opportunity to listen to music based on their taste, music artist and name of the song"
              demoLink="https://github.com/Ayush63553/Project"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Yardstick Taskmanager"
              description="A simple task manager application built using next.js"
              demoLink="https://yardstick-taskmanager.vercel.app"
            />
          </Col>

          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
