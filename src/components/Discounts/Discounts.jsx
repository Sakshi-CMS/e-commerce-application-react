import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import './Discounts.css';
import CusionCover from '../Assets/Cushion_Cover_ bedsheet_and_more.jpg'
import lightningSolution from '../Assets/Lighting_solutions.jpg'
import washingMachine from '../Assets/Washing-Machines.jpg'
import shipmops from '../Assets/Spinmops.jpg'
import Home_storage from '../Assets/Home_storage.webp'
import Figurunes from '../Assets/Figurines_vaseS.jpg'
import crewdriver from '../Assets/crewdrivers_&_more.jpg'
import Clothing from '../Assets/Clothing.jpg'
import Bathroom_hardware from '../Assets/Bathroom_hardware.jpg'
import Watches from '../Assets/Watches.jpg'
import refigrator from '../Assets/Refrigerators.jpg'
import Microwave from '../Assets/Microwaves.jpg'
import AirConditioner from '../Assets/AirConditioner.png'
import BagWallet from '../Assets/Bags & wallets.jpg'
import ExtensionMore from '../Assets/Extensions_MORE.jpg'
import Footware from '../Assets/Footwear.jpg'


const Discounts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
        <div className=''>
            <Row className="m-3">
                <Col md={3} className="d-flex align-items-stretch">
                    <Card className="w-100 shadow rounded-0 border-0">
                        <Card.Body>
                            <Card.Title>Applications for your home | Up to 55% off</Card.Title>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={AirConditioner} height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Air conditioners</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={refigrator} height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Refrigerators</Card.Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={Microwave} height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Microwaves</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={washingMachine} height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Washing Machines</Card.Link>
                                </Col>
                            </Row>
                            <Card.Link className="d-flex align-item-start text-decoration-none small" href="#">See more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Other discount cards */}
                
                <Col md={3} className="d-flex align-items-stretch">
                    <Card className="w-100 shadow rounded-0 border-0">
                        <Card.Body>
                            <Card.Title>Up to 60% off | New Styles for men</Card.Title>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={Clothing}height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Clothing</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={Footware} height="120" width="15"/>
                                    <Card.Link className='dic-img' href="#">Footwear</Card.Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={Watches} height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Watches</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={BagWallet} height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Bags & wallets</Card.Link>
                                </Col>
                            </Row>
                            <Card.Link className="d-flex align-item-start text-decoration-none small" href="#">End of season sale</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} className="d-flex align-items-stretch">
                    <Card className="w-100 shadow rounded-0 border-0">
                        <Card.Body>
                            <Card.Title>Automotive essentials | Up to 60% off </Card.Title>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={CusionCover} height="120" width="15"/>
                                    <Card.Link className='dic-img' href="#">Cushion Cover, bedsheet and more</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={Figurunes} height="120" width="15"/>
                                    <Card.Link className='dic-img' href="#">Figurines, vases and more</Card.Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={Home_storage} height="120" width="15"/>
                                    <Card.Link className='dic-img' href="#">Home storage</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={lightningSolution} height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Lighting solutions</Card.Link>
                                </Col>
                            </Row>
                            <Card.Link className="d-flex align-item-start text-decoration-none small" href="#">Explore All</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} className="d-flex align-items-stretch">
                    <Card className="w-100 shadow rounded-0 border-0">
                        <Card.Body>
                            <Card.Title>Starting ₹99 | All your home improvement needs</Card.Title>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={shipmops}height="120" width="15" />
                                    <Card.Link className='dic-img' href="#">Spin mops, wipes & more</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={Bathroom_hardware} height="120" width="15"/>
                                    <Card.Link className='dic-img' href="#">Bathroom hardware & accessories</Card.Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={crewdriver} height="120" width="15"/>
                                    <Card.Link className='dic-img' href="#">crewdrivers & more</Card.Link>
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Card.Img variant="top" src={ExtensionMore} height="120" width="15"/>
                                    <Card.Link className='dic-img' href="#">Extensions & more</Card.Link>
                                </Col>
                            </Row>
                            <Card.Link className="d-flex align-item-start text-decoration-none small" href="#">Explore all</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </div>
    );
};

export default Discounts;
