import React from 'react'
import './Card.css';
import Card from 'react-bootstrap/Card';
import SingleItem from './single-item/SingleItem'

const CardItem = () => {
    return (
        <Card className="Card-container">
            <Card.Header>Exemplo commit</Card.Header>
            <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                    <SingleItem/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardItem