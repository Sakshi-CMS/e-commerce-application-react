import React, { useState, useEffect } from 'react';
import './Orders.css'

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 

  
  const fetchData = async () => {
    setTimeout(() => {
      const data = [
        { orderId: 1, productId: 'Product1', userId: 'User1', details: ['Detail1', 'Detail2'], deliveryAddress: 'Address1', status: 'Pending' },
        { orderId: 2, productId: 'Product2', userId: 'User2', details: ['Detail3', 'Detail4'], deliveryAddress: 'Address2', status: 'Delivered' },
      ];
      setOrders(data);
    }, 1000);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const pendingOrders = orders.filter(order => order.status === 'Pending').length;
  const shippedOrders = orders.filter(order => order.status === 'Shipped').length;
  const deliveredOrders = orders.filter(order => order.status === 'Delivered').length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleStatusChange = (index, event) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = event.target.value;
    setOrders(updatedOrders);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'yellow';
      case 'Shipped':
        return 'blue';
      case 'Delivered':
        return 'green';
      default:
        return 'black';
    }
  };

  return (
    <div>
      <div className='main-title'>
        <h3>ORDERED PRODUCTS</h3>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Order Id</th>
            <th scope="col">Product Id</th>
            <th scope="col">User Id</th>
            <th scope="col">Product Details</th>
            <th scope='col'>Delivery Address</th>
            <th scope='col'>Status</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{order.orderId}</td>
              <td>{order.productId}</td>
              <td>{order.userId}</td>
              <td>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {order.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </td>
              <td>{order.deliveryAddress}</td>
              <td>{order.status}</td>
              <td>
                <select 
                  value={order.status} 
                  onChange={(event) => handleStatusChange(index, event)}
                  className='drop-down' 
                  style={{ backgroundColor: getStatusColor(order.status) }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
          </li>
          {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(orders.length / itemsPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export const fetchOrdersData = async () => {
  const data = [
    { orderId: 1, productId: 'Product1', userId: 'User1', details: ['Detail1', 'Detail2'], deliveryAddress: 'Address1', status: 'Pending' },
    { orderId: 2, productId: 'Product2', userId: 'User2', details: ['Detail3', 'Detail4'], deliveryAddress: 'Address2', status: 'Delivered' },
  ];
  return data;
};

export default Orders;
