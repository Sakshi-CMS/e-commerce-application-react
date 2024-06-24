import React, { useState } from 'react';
import {BrowserRouter, Route, Routes ,useNavigate} from 'react-router-dom';
import './AdminDashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Product from '../AdminDashboard/Product';
import Orders from './Orders';
import Inventory from './Inventory';
import Reports from './Reports';
import AdminProfile from './AdminProfile';

const AdminDashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const navigate = useNavigate();

  const handleSidebarClick = (path) => {
    alert(path)
    setOpenSidebarToggle(false); // Close sidebar on item click
    navigate(path);
  };

  return (
    <div>
      <div className='background' style={{
        backgroundImage: `linear-gradient(180deg, #fde1ff, #e1ffea22 60%)`,
      }}>
        <div className='grid-container'>
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} handleSidebarClick={handleSidebarClick}/>
          <div className="content-container" >
            <Routes> {/* Make sure to use Routes from 'react-router-dom' */}
              <Route path='/adminDashboard' element={<Home />} />
              <Route path='/admin-dashboard' element={<Home />} />
              <Route path='/product' element={<Product />} />
              <Route path='/admin-dashboard/orders' element={<Orders />} />
              <Route path='/admin-dashboard/inventory' element={<Inventory />} />
              <Route path='/admin-dashboard/reports' element={<Reports />} />
              <Route path='/admin-dashboard/profile' element={<AdminProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
