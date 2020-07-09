import React from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
    return (
        <Container fluid>
            <Jumbotron>
                <h1>Blog Title</h1>
            </Jumbotron>
            <Row>
                <Col md={2}>
                    <h5>July</h5>
                    <ul>
                        <li>07/02/2020</li>
                    </ul>
                </Col>
                <Col md={7}>
                    <Card style={{ width: "auto" }}>
                        <Card.Body>
                            <Card.Title>Post Title</Card.Title>
                            <Card.Subtitle>Post Date</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis enim ut tellus elementum sagittis vitae. Diam in arcu cursus euismod quis viverra nibh. Maecenas accumsan lacus vel facilisis. Augue eget arcu dictum varius duis at consectetur lorem donec. Pretium viverra suspendisse potenti nullam ac tortor. Eu ultrices vitae auctor eu augue ut. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
                            </Card.Text>
                            <Card.Text>
                                Senectus et netus et malesuada. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Ipsum a arcu cursus vitae congue mauris. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Donec ultrices tincidunt arcu non sodales neque sodales. Diam quis enim lobortis scelerisque fermentum dui. Enim tortor at auctor urna nunc id cursus metus. Enim sed faucibus turpis in eu mi bibendum neque egestas. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Scelerisque fermentum dui faucibus in ornare. Ac felis donec et odio pellentesque. Adipiscing elit ut aliquam purus sit amet luctus venenatis.
                            </Card.Text>
                            <Card.Text>
                                Feugiat pretium nibh ipsum consequat nisl. Lorem dolor sed viverra ipsum nunc. Quis viverra nibh cras pulvinar mattis nunc. Auctor neque vitae tempus quam pellentesque nec. Non blandit massa enim nec dui nunc. In est ante in nibh mauris cursus mattis. Neque aliquam vestibulum morbi blandit. Facilisis leo vel fringilla est ullamcorper. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Vitae semper quis lectus nulla at volutpat diam. Dolor morbi non arcu risus quis varius quam quisque. Sed id semper risus in. Sed libero enim sed faucibus turpis in eu mi bibendum. Volutpat lacus laoreet non curabitur gravida. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Risus at ultrices mi tempus imperdiet nulla malesuada.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    Pictures can go here.
                </Col>
            </Row>
        </Container>
    )
}

export default App;