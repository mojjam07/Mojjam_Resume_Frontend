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
import "../../styles/testimonials.scss";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [firstThreeTestimonials, setFirstThreeTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false); // For the form modal
  const [image, setImage] = useState(null); // State to store the image file
  const [loading, setLoading] = useState(true); // State to manage loading

  const API_URL = import.meta.env.REACT_APP_API_URL;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`${API_URL}/testimonials`)
        //fetch("http://localhost:8000/api/testimonials/") // Replace with your actual backend URL
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch testimonials");
          }
          return response.json();
        })
        .then((data) => {
          setTestimonials(data);
          setFirstThreeTestimonials(data.slice(0, 3)); // Get the first three testimonials
          setLoading(false); // Stop loading once data is fetched
        })
        .catch((error) => {
          console.error("Error fetching testimonials:", error);
          setLoading(false); // Stop loading even if there's an error
        });
    }, 3000); // Simulate a 3-second loading delay
  }, []);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target.formName.value);
    formData.append("testimonial", e.target.formTestimonial.value);
    if (image) {
      formData.append("image", image);
    }

    // Submit form data with image to the backend
    fetch(`${API_URL}/newtestimonials`, {
      //fetch("http://localhost:8000/api/newtestimonials/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setShowFormModal(false); // Close the form modal after submission
        alert(
          "Your testimony has already been sent to the admin,\n it will be published if approved!"
        );
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  // Handle image upload
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
          ) : Array.isArray(firstThreeTestimonials) &&
            firstThreeTestimonials.length > 0 ? (
            firstThreeTestimonials.map((testimonial, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="testimonial-card text-center">
                  <Card.Body>
                    <Image
                      src={
                        testimonial.profile_picture ||
                        "path/to/default-image.jpg"
                      } // Use default image if profilePicture is missing
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
            <p>No Single Testimonial Yet</p>
          )}
        </Row>
        <div className="text-center">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Show More
          </Button>
        </div>
      </Container>

      {/* More Testimonials Modal */}
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
                      } // Use default image if profilePicture is missing
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

      {/* Plus Icon that triggers the form modal */}
      <div className="plus-icon-container">
        <FontAwesomeIcon
          icon={faPlus}
          className="plus-icon"
          onClick={() => setShowFormModal(true)}
        />
      </div>

      {/* Form Modal */}
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
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTestimonial">
              <Form.Label>Testimonial</Form.Label>
              <Form.Control
                as="textarea"
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
