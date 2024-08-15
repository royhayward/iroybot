// Post1.js

import { Card } from "react-bootstrap";

const Post1 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
                "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Exterior Perimeter Loss-Prevention Case</Card.Title>
                <Card.Text>
                    In this case, we have an intruder that interacts with a fence like climbing or cutting. The alert triggers a response from the LVT unit. It also triggers information gathering actions of other assets.
                </Card.Text>
                <a href="#" className="btn btn-primary">Trigger Fence</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;
