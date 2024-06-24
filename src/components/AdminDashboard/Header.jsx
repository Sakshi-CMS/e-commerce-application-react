import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import './Header.css';

function Header({ OpenSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchData();
    // Add event listener to detect clicks outside of the dropdown
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  const search = () => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout logic here
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className="input-box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here"
        />
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <div className='profile-icon' ref={dropdownRef}>
          <BsPersonCircle className='icon' onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className='dropdown'>
              <ul>
                <li>
                  <Link to='/admin-dashboard/profile'>Profile</Link>
                </li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
