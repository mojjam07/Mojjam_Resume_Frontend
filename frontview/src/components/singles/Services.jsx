import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/services.scss";
import web from "../../assets/web-design.png";
import mobile from "../../assets/mobile.png";
import ui from "../../assets/uiux.png";
import consult from "../../assets/consult.png";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone to formData
    service_type: "",
    description: "",
  });

  useEffect(() => {
    const localServices = [
      { image: web, name: "Web Development" },
      { image: mobile, name: "Mobile App Develpoment" },
      { image: ui, name: "UIUX Design" },
      { image: consult, name: "Tech Talk" },
    ];
    setServices(localServices);
  }, []);

  // Handle modal show
  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  // Handle modal close
  const handleClose = () => {
    setShowModal(false);
    setSelectedService(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      description: "",
    });
  };

  // Handle form input change
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

    const response = await fetch(`${API_URL}/api/consults/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service_type: "",
        description: "",
      });
    } else {
      alert("There was an issue sending your message. Please try again.");
    }
    console.log("Form submitted with data:", formData);
    handleClose(); // Close modal after submission
  };

  return (
    <section className="services-section" id="services">
      <Container>
        <h2 className="text-center mb-4">My Services</h2>
        <Row>
          {Array.isArray(services) && services.length > 0 ? (
            services.map((service, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt={service.name}
                    id={service.name}
                  />
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow(service)}
                    >
                      Consult
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No services available</p>
          )}
        </Row>
      </Container>

      {/* Modal for service consultation */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Consultation Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedService && (
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
                <Form.Label>Email address</Form.Label>
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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formServiceType">
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="What service type do you want?"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Try to be more specific in your description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button className="modal-button" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ServicesSection;
