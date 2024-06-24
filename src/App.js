
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategery from './Pages/ShopCategery';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
// import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Item from './components/Item/Item';
import { CarouselItem } from 'react-bootstrap';
import men_banner from './components/Assets/Men_Banner.webp'
import women_banner from './components/Assets/Women_Banner.jpg'
import kid_banner from './components/Assets/Kids_Banner.jpg'
import Electo_banner from './components/Assets/Electonic_Banner.jpg'
import Grocery_banner from './components/Assets/Grocery_Banner2.avif'
import Footer from './components/Footer/Footer'
import AdminDashnoard from './components/AdminDashboard/AdminDashboard';
import Login from './Pages/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategery banner ={men_banner}category="Men"/>}/>
        <Route path="/womens" element={<ShopCategery banner ={women_banner} category="Women"/>}/>
        <Route path="/kids" element={<ShopCategery banner ={kid_banner} category="kid"/>}/>
        <Route path="/electronics" element={<ShopCategery banner ={Electo_banner} category="electronics"/>}/>
        <Route path="/Grocery" element={<ShopCategery banner ={Grocery_banner} category="Grocery"/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/loginSignUp" element={<LoginSignUp/>}/>
        <Route path="/item" element={<Item/>}/>
        <Route path="/CarouselItem" element={<CarouselItem/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route path='/adminDashboard' element={<AdminDashnoard/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
       </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}
export default App;
