import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart_icon from '../Assets/shopping-cart.png';
import Noti_icon from '../Assets/Notification_Icon.png';
import logo from '../Assets/Shopping_Logo.png';
import { Link ,useLocation} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const location = useLocation();


    return (
        <div className='navbar-container'>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between shadow">
                <div className="d-flex align-items-center logo-margin">
                    <img className="Shopping_logo" src={logo} width="70" height="70" alt="" />
                    <a className="navbar-brand text" href="#">SHOPPER</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-menu justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li onClick={() => { setMenu("shop") }} className="nav-item active ">
                        <Link className='nav-link text-dark text-decoration-none' to='/'>Shop</Link> {menu==="shop" && <hr className='hr_dec'/>}
                        </li>
                        <li onClick={() => { setMenu("mens") }} className="nav-item">
                           <Link className='nav-link text-dark text-decoration-none' to='/mens'>Men</Link>{menu==="mens" && <hr className='hr_dec'/>}
                        </li>
                        <li onClick={() => { setMenu("womens") }} className="nav-item">
                           <Link className=' nav-link text-dark text-decoration-none' to='/womens'>Women</Link> {menu==="womens" && <hr className='hr_dec'/>}
                        </li>
                        <li onClick={() => { setMenu("kids") }} className="nav-item">
                            <Link className='nav-link text-dark text-decoration-none'  to='/kids'>Kids</Link> {menu==="kids" && <hr className='hr_dec'/>}
                        </li>
                        {/* <li onClick={() => { setMenu("electronics") }} className="nav-item">
                            <Link className='nav-link text-dark text-decoration-none'  to='/electronics'>Electonics</Link> {menu==="electronics"&&<hr className='hr_dec'/>}
                        </li>
                        <li onClick={() => { setMenu("Grocery") }} className="nav-item">
                            <Link className=' nav-link text-dark text-decoration-none'  to='/Grocery'>Grocery</Link> {menu==="Grocery" && <hr className='hr_dec'/>}
                        </li> */}
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <div className="col-lg-8 col-md-6 col-sm-12 d-flex p-0">
                        <input type="text" placeholder="Search..." className="form-control" id="search" name="search"/>
                        <button type="submit" className="btn btn-base ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>
                    <Link to='/login'><button className="btn mr-3 fw-bold btndesign">Login</button> </Link>
                    <Link to='/notification'><img className="cart_logo cart-icon-margin p-0 m-3"  width="30" height="30" src={Noti_icon} alt=""/> </Link>
                    <div className="badge bg-primary rounded-circle ntfn-counter">3</div>
                    <Link to='/cart'><img className="cart_logo cart-icon-margin mr-1"  width="30" height="30" src={cart_icon} alt=""/></Link>
                    <div className="badge bg-primary rounded-circle cart-counter">3</div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
