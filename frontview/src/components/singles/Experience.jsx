import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/experience.scss";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const localExperiences = [
      {
        job_title: "Intern/IT Support",
        company_name: "Federal Airport Authority of Nigeria",
        start_date: "2021-06-01",
        end_date: "2022-05-31",
        description:
          "Gaining Experience of under the department of ICT in the Airport",
      },
      {
        job_title: "Casual Staff",
        company_name: "Federal Airport Authority of Nigeria",
        start_date: "2022-06-01",
        end_date: "2027-12-31",
        description:
          "Expanding my Experience in the department of ICT in the Airport",
      },
      {
        job_title: "Software Technician",
        company_name: "Mantel Technology Scanners",
        start_date: "2023-02-01",
        end_date: "2030-12-31",
        description:
          "Maintaining softwares and scanning equipments and surveillance installation",
      },
    ];
    setExperiences(localExperiences);
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
