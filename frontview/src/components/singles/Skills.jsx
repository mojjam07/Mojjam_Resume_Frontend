import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/skills.scss";

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const localSkills = [
      { name: "HTML", level: 95 },
      { name: "CSS/SCSS/SASSY", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Bootstrap", level: 90 },
      { name: "Python", level: 85 },
      { name: "React", level: 75 },
      { name: "Django", level: 70 },
      { name: "React Native", level: 70 },
    ];
    setSkills(localSkills);
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
