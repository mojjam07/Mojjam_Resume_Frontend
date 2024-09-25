import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sponsor from "../../assets/my_logo3.svg";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import "../../styles/footer.scss";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="text-center py-4">
          <Col md={4}>
            <h5>Powered By</h5>
            <div className="sponsor-logos">
              <Image src={sponsor} alt="Sponsor 1" fluid />
            </div>
          </Col>
          <Col md={4} className="pt-3">
            <h5>Connect with me @</h5>
            <div className="social-icons">
              <a
                href="https://wa.link/vr5k1m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={32} className="mx-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/mojeed-jamiu-b279171a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} className="mx-2" />
              </a>
              <a
                href="https://www.github.com/mojjam07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} className="mx-2" />
              </a>
            </div>
          </Col>
          <Col md={4} className="pt-3">
            <h5>Contact me @</h5>
            <p>Email: mojjam07@gmail.com</p>
            <p>Phone: +234-802-060-0641</p>
            <p>
              Address: 22 Ogunoloko Road,
              <br />
              Mafoluku-Oshodi, Lagos, Nigeria
            </p>
          </Col>
        </Row>
        <Row className="text-center pt-4 border-top">
          <Col>
            <p>
              &copy; {new Date().getFullYear()} mojjam tech. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
