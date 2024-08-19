// Post3.js

import { Card } from "react-bootstrap";
import image from './img/shelf-loss-prevention.png';

const Post3 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={image}
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Interior Product Loss-Prevention Case</Card.Title>
                <Card.Text>
                    In this case, analytics at the product or shelf detect unusual or suspicious activity. This event creates a case and triggers other assets to begin gathing other information. Audible messages are broadcast to the retail floor, and internal messages are ent over associate radio systems.
                </Card.Text>
                <a href="#" className="btn btn-primary">Trigger Shelf Sweep</a>
                <a href="#" className="btn btn-primary">Trigger Product Concealment</a>
            </Card.Body>
        </Card>
    )
}

export default Post3;
