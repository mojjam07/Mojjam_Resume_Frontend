import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../../assets/me.png";
import "../../styles/profile.scss";

const ProfileSection = () => {
  return (
    <section className="profile-section" id="profile">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image
              src={profileImage}
              roundedCircle
              fluid
              alt="Your Name"
              className="profile-picture"
            />
          </Col>
          <Col md={8}>
            <h2>Jamiu Mojeed Adekunle</h2>
            <p className="location-text">Location: Lagos, Nigeria</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:mojjam07@gmail.com">contact@mojjam07.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+2347063306325">+234-706-330-6325</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/mojeed-jamiu-b279171a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/mojjam07"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </p>
            <p className="bio">
              I am a fullstack software developer, skilled in all software
              development related services, I am very passionate about
              challenges and problem solving.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfileSection;
