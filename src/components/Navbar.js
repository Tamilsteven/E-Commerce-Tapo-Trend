import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import img4 from "../assets/Images/shopping-bags.png"
import "../styles/navbar.css"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
//import {selectAllPost} from "./Product/Shopslice"
//import { useState,useEffect } from 'react';
const Navbar = () => {
  
 
    const Cart = useSelector((state)=>state.cart.CartItems)
    
  return (
    <>
   
  <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor:"white"}}  >  {/* style={{backgroundColor:"#79A58C"}} */}
  <div className="container  " >

   <Link to="/" className='navbar-brand ' >  <img src={img4} className='bag' alt='bag'/>Tapo Trend<p className='slogan'>Men & Women</p>
   </Link>

   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <p className="navbar-toggler-icon"></p>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
       
          <Link className="nav-link "  to="/Shopitem">Shop</Link>
     
          <Link className="nav-link "  to="/contact">Contact</Link>
      
          <Link className="nav-link " to="/login"><AccountCircleOutlinedIcon /></Link>
  
          <Link className="nav-link d-flex"  to="/Cart"><ShoppingCartIcon/>{Cart.length}

         
        
</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar