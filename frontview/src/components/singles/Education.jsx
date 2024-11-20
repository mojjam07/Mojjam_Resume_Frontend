import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/education.scss";
import { API_URL } from "../../services/api";

const EducationSection = () => {
  const [educationData, setEducationData] = useState([]);

  // const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const localEducationData = [
      {
        degree: "Bachelor of Science",
        institution: "Computer Science",
        institution_name: "Southwestern University (Ikeja Campus)",
        start_date: "2022/2023",
        end_date: "2024/2025",
        description:
          "Studying the knowledge of computation, algorithms, and systems, enabling problem-solving and innovation through technology.",
      },
      {
        degree: "National Diploma",
        institution: "Computer Science",
        institution_name: "Lagos City Polytechnic, Ikeja Lagos",
        start_date: "2019/2020",
        end_date: "2020/2021",
        description:
          "Studied the foundational knowledge of the course of study.",
      },
      {
        degree: "FullStack",
        institution: "Software Development",
        institution_name: "COPHILD Consult",
        start_date: "05/2024",
        end_date: "10/2024",
        description:
          "Gained a taste of what FullStack is all about with some technologies such as Python and JavaScript",
      },
    ];
    setEducationData(localEducationData);
  }, []);

  return (
    <section className="education-section" id="education">
      <Container>
        <h2 className="text-center mb-4">My Education</h2>
        <Row className="justify-content-center">
          {Array.isArray(educationData) && educationData.length > 0 ? (
            <Col md={8}>
              <Accordion>
                {educationData.map((education, index) => (
                  <Accordion.Item eventKey={index} key={index} className="mb-3">
                    <Accordion.Header>
                      <div className="d-flex justify-content-between w-100">
                        <span>{education.degree}</span>
                        <span>{education.institution}</span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <strong>Institution:</strong>{" "}
                        {education.institution_name}
                      </p>
                      <p>
                        <strong>Start Date:</strong> {education.start_date}
                      </p>
                      <p>
                        <strong>End Date:</strong> {education.end_date}
                      </p>
                      <p>
                        <strong>Description:</strong> {education.description}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          ) : (
            <p>No Education Background</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default EducationSection;
