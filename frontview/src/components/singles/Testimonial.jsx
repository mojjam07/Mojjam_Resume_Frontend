import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Modal,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "../../services/AxiosInstance";
import "../../styles/testimonials.scss";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [firstThreeTestimonials, setFirstThreeTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials on component mount
  useEffect(() => {
    setLoading(true);
    AxiosInstance.get("/api/testimonials")
      .then((response) => {
        setTestimonials(response.data);
        setFirstThreeTestimonials(response.data.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      });
  }, []);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (image) {
      formData.append("image", image);
    } else {
      alert("Please upload an image.");
      return;
    }

    AxiosInstance.post("/api/testimonials/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        // Update the state with the new testimonial
        setTestimonials((prev) => [...prev, response.data]);
        setFirstThreeTestimonials((prev) =>
          [...prev, response.data].slice(0, 3)
        );
        setShowFormModal(false);
        alert(
          "Your testimonial has been submitted successfully! \n It will be visible upon the approval of the admin"
        );
      })
      .catch((error) => {
        console.error("Error submitting testimonial:", error);
        alert("An error occurred while submitting your testimonial.");
      });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <Container>
        <h2 className="text-center mb-5">Testimonials</h2>
        <Row>
          {loading ? (
            <p>Loading testimonials...</p>
          ) : firstThreeTestimonials.length > 0 ? (
            firstThreeTestimonials.map((testimonial, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="testimonial-card text-center">
                  <Card.Body>
                    <Image
                      src={
                        testimonial.profile_picture ||
                        "path/to/default-image.jpg"
                      }
                      roundedCircle
                      className="mb-3"
                      alt={testimonial.name}
                    />
                    <Card.Title>{testimonial.name}</Card.Title>
                    <Card.Text className="testimonial-text">
                      {testimonial.testimonial}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No testimonials available yet.</p>
          )}
        </Row>
        <div className="text-center">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Show More
          </Button>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>More Testimonials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {testimonials.slice(3).map((testimonial, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="testimonial-card text-center">
                  <Card.Body>
                    <Image
                      src={
                        testimonial.profile_picture ||
                        "path/to/default-image.jpg"
                      }
                      roundedCircle
                      className="mb-3"
                      alt={testimonial.name}
                    />
                    <Card.Title>{testimonial.name}</Card.Title>
                    <Card.Text className="testimonial-text">
                      {testimonial.testimonial}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="plus-icon-container">
        <FontAwesomeIcon
          icon={faPlus}
          className="plus-icon"
          onClick={() => setShowFormModal(true)}
        />
      </div>

      <Modal
        show={showFormModal}
        onHide={() => setShowFormModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>

            <Form.Group controlId="formTestimonial">
              <Form.Label>Testimonial</Form.Label>
              <Form.Control
                as="textarea"
                name="testimonial"
                rows={3}
                placeholder="Write your testimonial"
                required
              />
            </Form.Group>

            <Button className="modal-button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default TestimonialSection;
