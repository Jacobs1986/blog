import React from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    return (
        <Container fluid>
            <Row>
                <h1>Blog title</h1>
            </Row>
            <Row>
                <Col md={2}>
                    Links to past posts go here.
                </Col>
                <Col md={7}>
                    Posts go here.
                </Col>
                <Col md={3}>
                    Pictures can go here.
                </Col>
            </Row>
        </Container>
    )
}

export default App;