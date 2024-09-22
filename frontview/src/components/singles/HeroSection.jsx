import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../assets/me_.png";
import "../../styles/hero.scss"; // Your custom styling if needed

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });
  const API_URL = process.env.REACT_APP_API_URL;

  // Handle modal show
  const handleShow = () => setShowModal(true);

  // Handle modal close
  const handleClose = () => setShowModal(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}questions/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your question has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          question: "",
        });
        handleClose(); // Close modal after successful submission
      } else {
        alert("Error submitting your question. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Column for the image */}
          <Col md={6}>
            <img src={HeroImage} alt="Hero" className="img-fluid" />
          </Col>
          {/* Column for the introduction and CTA */}
          <Col md={6}>
            <h1 className="Hero-text">
              Hey,
              <br />
              <b>
                I'm <span className="my-name">Jamiu Mojeed Adekunle,</span> but
                you can call me{" "}
                <small style={{ color: "#fb6d6d" }}>Mojjam!</small>
              </b>
            </h1>
            <p>
              Welcome to my digital space! I'm a full-stack web and mobile app
              developer, and I'm excited to have you here. Dive into my
              portfolio, explore my services, and let’s see how I can help bring
              your ideas to life!
            </p>
            <Button
              className="started-button"
              variant="outline-success"
              size="lg"
              onClick={handleShow} // Show modal on button click
            >
              Ask Question?
            </Button>
          </Col>
        </Row>

        {/* Modal for asking a question */}
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Ask Your Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formQuestion">
                <Form.Label>Your Question</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your question"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button className="modal-button" variant="success" type="submit">
                Send
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default HeroSection;
