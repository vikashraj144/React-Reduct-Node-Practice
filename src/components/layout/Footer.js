import React from 'react';
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// funcion component 
// passing props
const Footer = (props) => {
    return (
        <footer>
            {/* <p>Posted by: vikask
            Contact information: <a href="mailto:vikashraj144@gmail.com">
            email here</a>.</p> */}
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    Posted by: vikask
                    </Col>
                    {/* <Col md="auto">Empore</Col> */}
                    <Col xs lg="4">
                    Contact here: <a href="mailto:vikashraj144@gmail.com">
            email here</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;