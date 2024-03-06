import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Login from './components/form/Login';
import Cart from './components/Cart';
import Notfound from './components/Notfound';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
//import Shopslice from './components/Product/Shopslice';
import Shopitem from './components/Product/Shopitem';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import Signup from './components/form/Signup';
import { useState,useEffect } from 'react';
const App = () => {
  const [scroll, setScroll] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 10);
  });
});
 
  return (
    <>
    <Router>
      <header className={`headerMain ${scroll ? "sticky" : ""}`}>
      <Navbar/>
      </header>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Shopitem' element={<Shopitem/>} />
        <Route path='/contact'  element={<Contact/>} />
        <Route path='/login'  element={<Login/>} />
        <Route path='/signup'  element={<Signup/>} />
        <Route path='/cart'  element={<Cart/>} />
        <Route path='/*'  element={<Notfound/>} />
      </Routes>
    </Router>
  <footer>
     <div className="foot">
      <div className='content'>
        <div>
          <h3>TAPO TREND</h3>
            <p>The best look anytime, anywhere.</p>
            <a href='icon'><InstagramIcon sx={{fontSize:"20px"}}/> <FacebookIcon sx={{fontSize:"20px"}}/> <WhatsAppIcon sx={{fontSize:"20px"}}/> <TwitterIcon sx={{fontSize:"20px"}}/></a>
            </div>
              <div>
                
              </div>
            <ul>
            <h3>Men</h3>
               <li><a href="/Shopitem">Men Jeans</a></li>
                <li> <a href="/Shopitem">Men Shirt</a></li>
                <li><a href="/Shopitem">Men Shoes</a></li>
                <li><a href="/Shopitem">Men Jackets</a></li>
            </ul>
            <ul>
              <h3>Women</h3>
                <li><a href="/Shopitem">Women Jeans</a></li>
                <li> <a href="/Shopitem">Women Shirt</a></li>
                <li><a href="/Shopitem">Heels And Flats</a></li>
                <li><a href="/Shopitem">Women Jackets</a></li>
            </ul>
               <div className='subscribe'> <h3>Subscribe</h3>
               <input className='sub' type='email' id='email' placeholder='Your email address'/>
               <button type='button' className='btns'>Subscribe</button>
                </div>      
      </div>
      <span id='copy'>&copy; All Rights Reserved 2023-2024.</span>
     </div>
    
    </footer>  
        
    </>
   
  )
}

export default App;