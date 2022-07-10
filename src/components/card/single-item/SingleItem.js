import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleItem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SingleItem() {
    return (

        <Container>
            <Row>
                <Card className="Item-container">
                    <Card.Img variant="top" src={require("./chain.jpg")} alt="test" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                {/* <Card className="Item-container">
                    <Card.Img variant="top" src={require("./chain.jpg")} alt="test" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="Item-container">
                    <Card.Img variant="top" src={require("./chain.jpg")} alt="test" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
            </Row>
        </Container>
    );
}

export default SingleItem;