import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/experience.scss";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/experience/") // Replace with your actual backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch experiences data");
        }
        return response.json();
      })
      .then((data) => {
        setExperiences(data);
      })
      .catch((error) => console.error("Error fetching experiences:", error));
  }, []);

  return (
    <section className="experience-section" id="experience">
      <Container>
        <h2 className="text-center mb-4">My Experience</h2>
        <Row className="justify-content-center">
          {Array.isArray(experiences) && experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <Col md={4} key={index} className="d-flex align-items-stretch">
                <Card className="experience-card mb-4">
                  <Card.Body>
                    <Card.Title>{experience.job_title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experience.company_name}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Start Date:</strong> {experience.start_date}{" "}
                      <br />
                      <strong>End Date:</strong> {experience.end_date} <br />
                      <strong>Description:</strong> {experience.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No Experiences Available</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ExperienceSection;
