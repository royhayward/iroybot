// Post4.js

import { Card } from "react-bootstrap";
import image from './img/push-out-detection.png';

const Post4 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={image}
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Interior Push-Out Loss-Prevention Case</Card.Title>
                <Card.Text>
                    In this case, the shopper bypasses the checkout with products and attempts to exity the store. An event is triggered that begins a case. Other assets are triggered to gather information. If possible, the shopping cart is immobilized to prevent the shopper from leaving with the product.
                </Card.Text>
                <a href="#" className="btn btn-primary">Trigger Push-out</a>
            </Card.Body>
        </Card>
    )
}

export default Post4;
