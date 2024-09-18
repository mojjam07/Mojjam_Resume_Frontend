import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Loading from "../../components/singles/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/projects.scss";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before fetching data
    setTimeout(() => {
      fetch("http://localhost:8000/api/projects/") // Replace with your actual API URL
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch projects data");
          }
          return response.json();
        })
        .then((data) => {
          const formattedData = data.map((project) => ({
            ...project,
            technologies: project.technologies
              .split(",")
              .map((tech) => tech.trim()),
          }));
          setProjects(formattedData);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("Error fetching projects data:", error);
          setProjects([]); // Handle failure by setting an empty array
          setLoading(false); // Set loading to false on error
        });
    }, 2000); // Simulate a 2-second delay
  }, []);

  if (loading) {
    return <Loading />; // Display loading component while loading is true
  }

  const handleShowMore = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.slice(0, 3).map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="project-card">
                  <Card.Img
                    variant="top"
                    className="fixed-size-img"
                    src={project.image ? project.image : "default-image.jpg"}
                    alt={project.title ? project.title : "No Title"}
                  />
                  <Card.Body>
                    <Card.Title>
                      {project.title || "Untitled Project"}
                    </Card.Title>
                    <Card.Text>
                      {project.description || "No description available"}
                    </Card.Text>
                    <Card.Text>
                      <strong>Technologies:</strong>{" "}
                      {project.technologies
                        ? project.technologies.join(", ")
                        : "N/A"}
                    </Card.Text>
                    <Button
                      variant="primary"
                      href={project.github_link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See the GitHub Repo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No Recent Projects</p>
          )}
        </Row>
        {projects.length > 3 && (
          <div className="text-center">
            <Button variant="secondary" className="show-more" onClick={handleShowMore}>
              Show More
            </Button>
          </div>
        )}

        {/* Modal for showing all projects */}
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>All Projects</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {projects.map((project, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="project-card">
                    <Card.Img
                      variant="top"
                      className="fixed-size-img"
                      src={project.image ? project.image : "default-image.jpg"}
                      alt={project.title ? project.title : "No Title"}
                    />
                    <Card.Body>
                      <Card.Title>
                        <strong>{project.title || "Untitled Project"}</strong>
                      </Card.Title>
                      <Card.Text>
                        {project.description || "No description available"}
                      </Card.Text>
                      <Card.Text>
                        <strong>Technologies:</strong>{" "}
                        {project.technologies
                          ? project.technologies.join(", ")
                          : "N/A"}
                      </Card.Text>
                      <Button
                        variant="primary"
                        href={project.githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See the GitHub Repo
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default ProjectSection;
