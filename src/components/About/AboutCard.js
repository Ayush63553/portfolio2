import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayushman Jha </span>
            from <span className="purple"> New Delhi, India.</span>
            <br /> I am a Software Developer fresher who is really interested in learning new things and grow with the Technologies around me.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports (specially Football)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Create. Inspire. Repeat!"{" "}
          </p>
          <footer className="blockquote-footer">Ayushman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
