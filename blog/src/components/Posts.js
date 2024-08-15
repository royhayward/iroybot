// Posts.js

import React from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";
import { Container, Row, Col, Card } from 'react-bootstrap';


const Posts = () => {
    return (
        <Container>
            <Row className="justify-content-between">
                <Col md={8} className="mb-4 mt-4">
                    <Post1 />
                </Col>
                <Col md={2} className="mt-4 float-right">
                    <Card>
                        <Card.Body>
                            <Card.Title>Poss-Prevention Cases:</Card.Title>
                            <ul className="list-unstyled">
                                <li><a href="#">Perimeter</a></li>
                                <li><a href="#">Parking</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Point-of-Sale</a></li>
                                <li><a href="#">Push-Out</a></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8} className="mb-4">
                    <Post2 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post3 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post4 />
                </Col>
                <Col md={8} className="mb-4">
                    <Post5 />
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;
