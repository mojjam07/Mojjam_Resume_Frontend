import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/skills.scss";
import { API_URL } from "../../services/api";

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/api/skills/`, {
      method: "OPTIONS",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch skills data");
        }
        return response.json();
      })
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="text-center mb-4">My Skills</h2>
        {Array.isArray(skills) && skills.length > 0 ? (
          skills.map((skill, index) => (
            <Row key={index} className="mb-3">
              <Col md={4} className="skill-name">
                <h5>{skill.name}</h5>
              </Col>
              <Col md={8}>
                <ProgressBar
                  className="progress"
                  now={skill.level}
                  label={`${skill.level}%`}
                  variant="success"
                />
              </Col>
            </Row>
          ))
        ) : (
          <p>No skills available</p>
        )}
      </Container>
    </section>
  );
};

export default SkillsSection;
