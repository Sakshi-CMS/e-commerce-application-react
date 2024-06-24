import React, { useState, useEffect } from 'react';
import { BsTruck, BsClockHistory, BsFileEarmarkText } from 'react-icons/bs';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import './Home.css';
import {fetchOrdersData} from './Orders';

function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrdersData();
      setOrders(data);
    };
    fetchData();
  }, []);

  // Calculate counts for different order statuses
  const pendingOrders = orders.filter((order) => order.status === 'Pending').length;
  const shippedOrders = orders.filter((order) => order.status === 'Shipped').length;
  const deliveredOrders = orders.filter((order) => order.status === 'Delivered').length;

  const data = [
    { name: 'Top', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Jeans', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Ethenic', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Traditional', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Brezer', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Lehenga', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Skirt', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card bgcolour card-des">
          <div className="card-inner">
            <h5>TOTAL ORDERS</h5>
            <BsFileEarmarkText className="card_icon" />
          </div>
          <h1>{orders.length}</h1>
        </div>
        <div className="card card-des ">
          <div className="card-inner">
            <h5>PENDING</h5>
            <BsClockHistory className="card_icon" />
          </div>
          <h1>{pendingOrders}</h1>
        </div>
        <div className="card card-des">
          <div className="card-inner">
            <h3>SHIPPED</h3>
            <BsTruck className="card_icon" />
          </div>
          <h1>{shippedOrders}</h1>
        </div>
        <div className="card card-des">
          <div className="card-inner">
            <h3>DELIVERED</h3>
            <AiOutlineDeliveredProcedure className="card_icon" />
          </div>
          <h1>{deliveredOrders}</h1>
        </div>
      </div>

      <div className="charts">
        <div className="chart shadow">
          <h5>Top 5 Products</h5>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart shadow">
          <h5>Purchase & Sales Orders</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
