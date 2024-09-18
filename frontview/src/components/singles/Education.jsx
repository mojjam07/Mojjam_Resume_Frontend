// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../styles/education.scss";

// const EducationSection = () => {
//   const [educationData, setEducationData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/education/") // Replace `API_URL` with your actual backend URL
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch education data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setEducationData(data);
//       })
//       .catch((error) => console.error("Error fetching education data:", error));
//   }, []);

//   return (
//     <section className="education-section" id="education">
//       <Container>
//         <h2 className="text-center mb-4">My Education</h2>
//         <Row className="justify-content-center">
//           {Array.isArray(educationData) && educationData.length > 0 ? (
//             educationData.map((education, index) => (
//               <Col md={6} key={index} className="mb-4">
//                 <Card className="education-card">
//                   <Card.Body>
//                     <Card.Title>{education.degree}</Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted">
//                       {education.institution}
//                     </Card.Subtitle>
//                     <Card.Text>
//                       <strong>Institution:</strong> {education.institution_name}{" "}
//                       <br />
//                       <strong>Start Date:</strong> {education.start_date} <br />
//                       <strong>End Date:</strong> {education.end_date} <br />
//                       <strong>Description:</strong> {education.description}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))
//           ) : (
//             <p>No Education Background</p>
//           )}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default EducationSection;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/education.scss";

const EducationSection = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/education/") // Replace `API_URL` with your actual backend URL
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
