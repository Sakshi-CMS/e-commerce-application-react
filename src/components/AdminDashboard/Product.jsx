import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Table, Container } from 'react-bootstrap';
import './Product.css';
import axios from 'axios';

const Product = () => {
    const [file, setFile] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        imageUrl: '',
        brand: '',
        title: '',
        color: '',
        discountedPrice: '',
        price: '',
        discountPercent: '',
        sizes: {
            S: '',
            M: '',
            L: ''
        },
        category: '',
        secondCategory: '',
        thirdCategory: '',
        description: ''
    });
    const fieldOrder = [
        'imageUrl',
        'brand',
        'title',
        'color',
        'discountedPrice',
        'price',
        'discountPercent',
        'sizes',
        'category',
        'secondCategory',
        'thirdCategory',
        'description'
    ];


    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8089/product/products');
            const updatedTableData = response.data.map(product => {
                return {
                    ...product,
                    imageUrl: `http://localhost:8089${product.imageUrl}` // Append base URL to imageUrl
                };
            });
            setTableData(updatedTableData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    // Call fetchProducts when the component mounts
    useEffect(() => {
        alert("hi")
        fetchProducts();
    }, []);


    const handleFormChange = (e) => {
        const { id, value } = e.target;
        if (id === 'S' || id === 'M' || id === 'L') {
            setFormData(prevState => ({
                ...prevState,
                sizes: {
                    ...prevState.sizes,
                    [id]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [id]: value
            }));
        }
    };

    const handleFileUpload = (e) => {
        if (e.target.id === 'imageUrl') {
            setFile(e.target.files[0]);
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        };

    };

    const handleFormSubmit = (event) => {
        debugger;
        event.preventDefault();
        const url = 'http://localhost:8089/product/addProduct';
        const formDataToSend = new FormData();

        // Append the image file to formDataToSend
        if (file) {
            formDataToSend.append('image', file);
        }

        // Append all form data to formDataToSend
        Object.keys(formData).forEach(key => {
            if (key === 'sizes') {
                // Stringify the sizes object and append it to formDataToSend
                formDataToSend.append(key, JSON.stringify(formData[key]));
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        axios.post(url, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log("response is" + response.data);

                // const updatedTableData = [...tableData];
                // if (editIndex !== null) {
                //     updatedTableData[editIndex] = { ...formData };
                // } else {
                //     // Assign a unique ID to the new item (replace 'uniqueId' with your unique ID property)
                //     const newItem = { ...formData, id: generateUniqueId() };
                //     updatedTableData.push(newItem);
                // }
                // setTableData(updatedTableData);
        
                // Clear form data
                setFormData({
                    imageUrl: '',
                    brand: '',
                    title: '',
                    color: '',
                    discountedPrice: '',
                    price: '',
                    discountPercent: '',
                    sizes: {
                        S: '',
                        M: '',
                        L: ''
                    },
                    category: '',
                    secondCategory: '',
                    thirdCategory: '',
                    description: ''
                });

                // Clear image file
                document.getElementById('imageUrl').value = '';

                // Clear checkbox inputs
                document.getElementById('check1').checked = false;
                document.getElementById('check2').checked = false;
                document.getElementById('check3').checked = false;


                fetchProducts();
                setEditIndex(null);
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    const handleEdit = (index) => {
        const selectedItem = tableData[index];
        setFormData(selectedItem);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedTableData = [...tableData];
        updatedTableData.splice(index, 1);
        setTableData(updatedTableData);
    };

    return (
        <Container fluid>
            <div className='main-title'>
                <h3>ADD PRODUCT</h3>
            </div>
            <div className='m-3'>
                <div className="shadow p-4 mb-5 bg-body rounded">
                    <Row className="mb-4">
                        <Col md={4}>
                            <div className="">
                                <label htmlFor="imageUrl"></label>
                                <input type="file" className="form-control rounded-pill fileUploadContainer" id="imageUrl" onChange={handleFileUpload} />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-pill" id="brand" placeholder="Brand" value={formData.brand} onChange={handleFormChange} />
                                <label htmlFor="brand">Brand</label>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-pill" id="title" placeholder="Title" value={formData.title} onChange={handleFormChange} />
                                <label htmlFor="title">Title</label>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-pill" id="color" placeholder="Color" value={formData.color} onChange={handleFormChange} />
                                <label htmlFor="color">Color</label>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="number" className="form-control rounded-pill" id="discountedPrice" placeholder="Discounted Price" value={formData.discountedPrice} onChange={handleFormChange} />
                                <label htmlFor="discountedPrice">Discounted Price</label>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="number" className="form-control rounded-pill" id="price" placeholder="Price" value={formData.price} onChange={handleFormChange} />
                                <label htmlFor="price">Price</label>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="number" className="form-control rounded-pill" id="discountPercent" placeholder="Discount Percentage" value={formData.discountPercent} onChange={handleFormChange} />
                                <label htmlFor="discountPercent">Discount Percentage</label>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-pill" id="category" placeholder="Category" value={formData.category} onChange={handleFormChange} />
                                <label htmlFor="category">Category</label>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-pill" id="secondCategory" placeholder="Second Category" value={formData.secondCategory} onChange={handleFormChange} />
                                <label htmlFor="secondCategory">Second Category</label>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-pill" id="thirdCategory" placeholder="Third Category" value={formData.thirdCategory} onChange={handleFormChange} />
                                <label htmlFor="thirdCategory">Third Category</label>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-floating">
                                <input type="text" className="form-control rounded-pill" id="description" placeholder="Description" value={formData.description} onChange={handleFormChange} />
                                <label htmlFor="description">Description</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="sizes">
                                <Form.Label>Sizes</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Check type="checkbox" label="S" id='check1' />
                                        <input type='text' placeholder="S-Quantity" className="form-control rounded-pill" value={formData.sizes.S} onChange={handleFormChange} id="S" />
                                    </Col>
                                    <Col>
                                        <Form.Check type="checkbox" label="M" id='check2' />
                                        <input type='text' placeholder="M-Quantity" className="form-control rounded-pill" value={formData.sizes.M} onChange={handleFormChange} id="M" />
                                    </Col>
                                    <Col>
                                        <Form.Check type="checkbox" label="L" id='check3' />
                                        <input type='text' placeholder="L-Quantity" className="form-control rounded-pill" value={formData.sizes.L} onChange={handleFormChange} id="L" />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" onClick={handleFormSubmit}>Save Product</Button>
                    </div>
                </div>
                <div className="table-container" >
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Actions</th>
                                <th>Sl. No</th>
                                {Object.keys(formData).map((key, index) => (
                                    <th key={index}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <Button variant="warning" onClick={() => handleEdit(index)}>Edit</Button>{' '}
                                        <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={item.imageUrl} alt="Product" style={{ width: '50px', height: 'auto' }} />
                                    </td>
                                    <td>{item.brand}</td>
                                    <td>{item.title}</td>
                                    <td>{item.color}</td>
                                    <td>{item.discountedPrice}</td>
                                    <td>{item.price}</td>
                                    <td>{item.discountPercent}</td>
                                    <td>
                                        {item.sizes && (
                                            <div>
                                                {Object.entries(item.sizes).map(([size, quantity]) => (
                                                    <div key={size}>
                                                        {size}: {quantity}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.secondCategory}</td>
                                    <td>{item.thirdCategory}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </div>
            </div>
        </Container>
    );
};

export default Product;
