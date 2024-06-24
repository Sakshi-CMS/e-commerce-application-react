import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import './Carousel_Cards.css';
import image1 from '../Assets/C_Product_1.jpg';

const Carousel_Cards = () => {
    const cardsData = [
        { id: 1, name: 'Product 1', image: image1, link: '#' },
        { id: 2, name: 'Product 2', image: 'image2.jpg', link: '#' },
        { id: 3, name: 'Product 3', image: 'image3.jpg', link: '#' },
        { id: 4, name: 'Product 4', image: 'image4.jpg', link: '#' },
        { id: 5, name: 'Product 5', image: 'image5.jpg', link: '#' },
        { id: 6, name: 'Product 6', image: 'image6.jpg', link: '#' },
        { id: 7, name: 'Product 7', image: 'image6.jpg', link: '#' },
        { id: 8, name: 'Product 8', image: 'image6.jpg', link: '#' },
        { id: 9, name: 'Product 9', image: 'image6.jpg', link: '#' },
        { id: 10, name: 'Product 11', image: 'image6.jpg', link: '#' },
        { id: 11, name: 'Product 12', image: 'image6.jpg', link: '#' },
        { id: 12, name: 'Product 13', image: 'image6.jpg', link: '#' },
        { id: 13, name: 'Product 14', image: 'image6.jpg', link: '#' },
    ];

    return (
        <div>
            <Carousel className='m-4'>
                {cardsData.map((_, index) => (
                    <Carousel.Item key={index}>
                        <Row>
                            {cardsData.slice(index, index + 6).map((card) => (
                                <Col key={card.id} md={2} className="card-col">
                                    <Card>
                                        <Card.Img variant="top" src={card.image} />
                                        <Card.Body>
                                            <Card.Link href='#' className='small text-decoration-none'>
                                                {card.name}
                                            </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Carousel_Cards;
