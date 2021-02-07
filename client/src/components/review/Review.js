import React from 'react';
import './style.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Axios from 'axios';

export default (props) => {
  const review = props.review;

  return (
    <Container fluid className='p-0'>
      <Row>
        <Col md={2}><p><b>{review.rating}</b></p></Col>
        <Col md={2}><p>{review.date}</p></Col>
      </Row>
      <Col md={2}>{review.description}</Col>
    </Container>
  );
}
