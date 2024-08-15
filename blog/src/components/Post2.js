// Post2.js

import { Card } from "react-bootstrap";

const Post2 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
"https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Exterior Parking Loss-Prevention Case</Card.Title>
                <Card.Text>
                    In this case one of the detection technologies creates an event. the LVT unit responds. And other assets are called to gather inforation. A case is initiated and events inside the store or subsequent events outside the store accumulate for transmission to case management.
                </Card.Text>
                <a href="#" className="btn btn-primary">Trigger Mobile Detection</a> 
                <a href="#" className="btn btn-primary">Trigger LPR Detection</a> 
                <a href="#" className="btn btn-primary">Trigger Suspicious Activity Detection</a> 
            </Card.Body>
        </Card>
    )
}

export default Post2;
