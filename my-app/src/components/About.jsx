import React from "react";
import image from "../static/img/admin2.jpeg";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <div className="row about-us-container justify-content-md-between">
      <h1 style={{ fontFamily: '-apple-system, system-ui, BlinkMacSystemFont', color: 'brown' }}>About Us</h1>
      <p style={{ textAlign: 'center', color: 'black' , margin : '20px'}}>We are a team of passionate developers who love building applications</p>

      <div className="col-md-6">
        <div className="d-flex justify-content-center">
          <Card style={{ width: '17rem' }}>
            <Image className="card-img-top" src={image} alt="Admin 1" />
            <Card.Body>
              <Card.Title>Aman</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">admin1@email.com</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-center">
          <Card style={{ width: '17rem'}}>
            <Image className="card-img-top" src={image} alt="Admin 2" />
            <Card.Body>
              <Card.Title>Santosh</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">santoshchinnoji@gmail.com</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: 'black' , margin : '20px'}}>Thank you for visiting our website!</p>
    </div>
  )
}

export default About;