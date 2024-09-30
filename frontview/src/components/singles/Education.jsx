import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/education.scss";
import { API_URL } from "../../services/api";

const EducationSection = () => {
  const [educationData, setEducationData] = useState([]);

  // const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/api/education/`)
      //fetch("http://localhost:8000/api/education/") // Replace `API_URL` with your actual backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch education data");
        }
        return response.json();
      })
      .then((data) => {
        setEducationData(data);
      })
      .catch((error) => console.error("Error fetching education data:", error));
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
