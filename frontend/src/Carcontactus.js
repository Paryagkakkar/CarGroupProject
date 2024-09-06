import React from 'react';
import { Container, Row, Col, Form, Button, Image, Card , ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
//import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer';
function Carcontactus(){

  return (
    <div>
<Container fluid className="p-5" style={{ backgroundColor: '#f0f8ff' }}>
  {/* Header Section */}
  <Row className="mb-5 text-center">
    <Col>
      <h1 style={{ color: '#ff4500', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>Contact Us</h1>
      <p style={{ fontSize: '18px' }}>We are here to assist you with all your car wash needs. Reach out to us through any of the methods below.</p>
    </Col>
  </Row>

  {/* Contact Info and Form Section */}
  <Row>
    <Col md={6} className="mb-4">
      <h2 style={{ color: '#ff6347', fontWeight: 'bold', marginBottom: '20px' }}>Get in Touch</h2>
      <p style={{ marginBottom: '30px' }}>Fill out the form below, and we'll get back to you as soon as possible.</p>
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ backgroundColor: '#ff6347', borderColor: '#ff6347', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          Send Message
        </Button>
      </Form>
    </Col>
    
    <Col md={6} className="mb-4">
    
      <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
      <iframe
            title="Softech Infoways Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508019!2d-122.4194154846819!3d37.77492977975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8e4c3e0f%3A0x4c1d79e73df1a2bb!2s123%20Tech%20Park%2C%20Silicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1618321795744!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: '0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        {/* <Card.Img variant="top" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508019!2d-122.4194154846819!3d37.77492977975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8e4c3e0f%3A0x4c1d79e73df1a2bb!2s123%20Tech%20Park%2C%20Silicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1618321795744!5m2!1sen!2sus "/> */}
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Visit Us</Card.Title>
          <Card.Text>Suvidha Marg, Hissar Road, Agrasain Colony, Sirsa-Haryana - 125055</Card.Text>
          <Button variant="outline-primary" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Get Directions</Button>
        </Card.Body>
      </Card>
      
    </Col>
    
  </Row>

  {/* Additional Info Section */}
  <Row className="mt-5">
    <Col md={4} className="mb-4">
      <Card className="shadow-lg h-100 card-hover" style={{ border: 'none', transition: 'transform 0.3s', cursor: 'pointer' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Call Us</Card.Title>
          <Card.Text>Need assistance or have questions? We're here to help!</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Phone:</strong> +91 9876543210</ListGroup.Item>
            <ListGroup.Item><strong>Hours:</strong> Mon-Fri, 8 AM - 6 PM</ListGroup.Item>
          </ListGroup>
          <Button variant="outline-success" className="mt-3" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Call Now</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4} className="mb-4">
      <Card className="shadow-lg h-100 card-hover" style={{ border: 'none', transition: 'transform 0.3s', cursor: 'pointer' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Email Us</Card.Title>
          <Card.Text>Drop us an email, and we'll respond within 24 hours.</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Email:</strong> info@carwashservice.com</ListGroup.Item>
          </ListGroup>
          <Button variant="outline-info" className="mt-3" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Send an Email</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4} className="mb-4">
      <Card className="shadow-lg h-100 card-hover" style={{ border: 'none', transition: 'transform 0.3s', cursor: 'pointer' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Follow Us</Card.Title>
          <Card.Text>Stay connected and follow us on social media for updates and offers!</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Facebook:</strong> facebook.com/carwashservice</ListGroup.Item>
            <ListGroup.Item><strong>Instagram:</strong> @carwashservice</ListGroup.Item>
          </ListGroup>
          <Button variant="outline-danger" className="mt-3" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>Follow Us</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  {/* Customer Testimonials */}
  <Row className="mt-5">
    <Col className="text-center">
      <h2 style={{ color: '#ff4500', fontWeight: 'bold', marginBottom: '30px' }}>What Our Customers Say</h2>
    </Col>
  </Row>
  <Row>
    <Col md={4} className="mb-4">
      <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
        <Card.Body>
          <Card.Text>"Amazing service! My car has never been this clean. Highly recommended!"</Card.Text>
          <footer className="blockquote-footer">Rohan Jain</footer>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
        <Card.Body>
          <Card.Text>"Great customer service and attention to detail. Will definitely return!"</Card.Text>
          <footer className="blockquote-footer">Amit Bansal</footer>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
        <Card.Body>
          <Card.Text>"Best car wash in the city. Fast, efficient, and friendly staff!"</Card.Text>
          <footer className="blockquote-footer">Ravi Verma</footer>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  {/* FAQ Section */}
  <Row className="mt-5">
    <Col className="text-center">
      <h2 style={{ color: '#ff4500', fontWeight: 'bold', marginBottom: '30px' }}>Frequently Asked Questions</h2>
    </Col>
  </Row>
  <Row>
    <Col md={6} className="mb-4">
      <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>Do I need an appointment?</Card.Title>
          <Card.Text>No . You can visit us anytime during our working hours.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} className="mb-4">
      <Card className="shadow-lg card-hover" style={{ border: 'none' }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>What payment methods do you accept?</Card.Title>
          <Card.Text>We accept all major credit cards, debit cards, and cash payments.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  {/* Footer Section
  <Row className="text-center mt-5">
    <Col>
      <p style={{ fontSize: '14px', color: '#777' }}>&copy; {new Date().getFullYear()} Car Wash Service. All Rights Reserved.</p>
    </Col>
  </Row> */}
</Container>

<Container fluid className="bg-dark text-light py-5">
      <Row className="mb-4">
        {/* Company Information */}
        <Col md={4} className="mb-4">
          <h5 style={{ fontWeight: 'bold', color: '#ff6347', borderBottom: '2px solid #ff6347', paddingBottom: '10px', marginBottom: '20px' }}>Car Wash Service</h5>
          <p>Suvidha Marg, Hissar Road, Agrasain Colony, Sirsa-Haryana - 125055</p>
          <p>
            Email: <a href="mailto:info@carwashservice.com" className="text-light" style={{ textDecoration: 'none' }}>info@carwashservice.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890" className="text-light" style={{ textDecoration: 'none' }}>+91 9876543210</a>
          </p>
        </Col>

        {/* Navigation Links */}
        <Col md={4} className="mb-4">
          <h5 style={{ fontWeight: 'bold', color: '#ff6347', borderBottom: '2px solid #ff6347', paddingBottom: '10px', marginBottom: '20px' }}>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>Home</a></li>
            <li><a href="/about" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>About Us</a></li>
            <li><a href="/services" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>Services</a></li>
            <li><a href="/contact" className="text-light" style={{ textDecoration: 'none', display: 'block', padding: '5px 0' }}>Contact Us</a></li>
          </ul>
        </Col>

        {/* Social Media Links */}
        <Col md={4} className="mb-4">
          <h5 style={{ fontWeight: 'bold', color: '#ff6347', borderBottom: '2px solid #ff6347', paddingBottom: '10px', marginBottom: '20px' }}>Follow Us</h5>
          <div>
            <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px', transition: 'color 0.3s' }}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px', transition: 'color 0.3s' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px', transition: 'color 0.3s' }}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer" style={{ fontSize: '28px', transition: 'color 0.3s' }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <p style={{ color: '#aaa', marginTop: '10px' }}>Stay connected with us for the latest updates and promotions.</p>

          </div>
        </Col>
        
      </Row>

      {/* Newsletter Signup Section */}
      <Row className="mt-4">
        <Col className="text-center">
          <h5 style={{ fontWeight: 'bold', color: '#ff6347', marginBottom: '20px' }}>Subscribe to Our Newsletter</h5>
          <form action="#" method="post" className="d-flex justify-content-center">
            <input type="email" placeholder="Enter your email" className="form-control me-2" style={{ maxWidth: '300px' }} />
            <button type="submit" className="btn btn-danger">Subscribe</button>
          </form>
        </Col>
      </Row>

      {/* Copyright Section */}
      <Row className="mt-4">
        <Col className="text-center">
          <p style={{ fontSize: '14px', color: '#aaa' }}>&copy; {new Date().getFullYear()} Car Wash Service. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  

    


        </div>
    )
}
export default Carcontactus