// Post4.js

import { Card } from "react-bootstrap";
import image from './img/pos-loss-prevention.png';

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
                <Card.Title>Interior POS Fraud Loss-Prevention Case</Card.Title>
                <Card.Text>
                    In this casa, an action at the Point-Of-Sale kiosk is flagged. This sends an event that triggers other assets to gather information and opens a case. Audible messages may be broadcast, and checkout may be delayed so that an associate can evaluate the situation.
                </Card.Text>
                <a href="#" className="btn btn-primary">Trigger Fraud Event</a>
            </Card.Body>
        </Card>
    )
}

export default Post4;
