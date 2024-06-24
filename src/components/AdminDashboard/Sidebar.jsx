import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsListCheck, BsMenuButtonWideFill } from 'react-icons/bs';
import './Sidebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='/adminDashboard' className='text-decoration-none'>
            <BsGrid1X2Fill className='icon'/>Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/admin-dashboard/product' className='text-decoration-none'>
            <BsFillArchiveFill className='icon'/>Products
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/admin-dashboard/orders' className='text-decoration-none'>
            <BsFillGrid3X3GapFill className='icon'/>Orders
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/admin-dashboard/inventory' className='text-decoration-none'>
            <BsListCheck className='icon'/>Inventory
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/admin-dashboard/reports' className='text-decoration-none'>
            <BsMenuButtonWideFill className='icon'/>Reports
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
