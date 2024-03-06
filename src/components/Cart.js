import React from 'react'
import { useEffect } from 'react'
//import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
//import { selectAllPost } from './Product/Shopslice'
import { Removecart ,increment,Clearcart,getTotals, decrement} from './Product/Cartslice'
import "../styles/cart.css"


const Cart = () => {
  const Cart = useSelector((state)=>state.cart)
       const dispatch = useDispatch()
       const handleRemove=(itemId)=>{
               dispatch(Removecart(itemId))
       }
       useEffect(() => {
        dispatch(getTotals());
      }, [Cart, dispatch]);
    console.log(Cart);
         const handleInc=(item)=>{
            dispatch(increment(item))
           }
     const handleDec=(item)=>{
                dispatch(decrement(item))
     }

  return (
    <>
    <div className="shop-cart">
 <h3 style={{textAlign:"center", paddingTop:"2%"}}>Shopping Cart</h3>
    </div>
     {Cart.CartItems.length ===0 ?(
      <p style={{textAlign:"center", paddingTop:"-2%"}}>Your cart is empty</p>
     ): (
      <div className="cart-display">
      <table className="table table-sm">
                
                   <thead className='table-dark md' >
                    <tr>
                      <th scope='col'>Product</th>
                      <th scope='col'>Title</th>
                      <th scope='col'>price</th>
                      <th scope='col'>Quantity</th>
                      <th scope='col'>Total</th>
                      <th scope='col'>Actions</th>
                    </tr>
                   </thead>
        {Cart.CartItems&&
        Cart.CartItems.map((item)=>(
            <tbody className="" key={item.id}>  
              <tr >
                <td>
                <img src={item.img} className='cart-img' alt="" />
                </td>
               <td >{item.title}</td>
               <td >{item.price}</td>
               <td>
                <button className='btn btn-light sm-1'onClick={()=>handleInc(item)} >+</button>&nbsp;
                <span className='count'>{item.cartQuantity}</span>
                <button className='btn btn-light sm-1' onClick={()=>handleDec(item)}>-</button>
                </td>
                <td>
                <div className="total-price">
                   ${item.cartQuantity * item.price}
                  </div>
                </td>
               <td >
               <button className='btn btn-none' onClick={()=>handleRemove(item)}><DeleteOutlinedIcon sx={{ color:"red"}}/></button>
               </td> 
               </tr>
            </tbody>
            
             
        ))
             }
          <div className="check">
            <button type='submit' className='btn btn-dark' onClick={()=>dispatch(Clearcart())}>Clear</button>
            </div>
            
      </table>

     
      <div className="total-items">
         <div>Subtotal:${Cart.cartTotalAmount}</div>
        <button className='btn btn-success'>Submit</button><br />
        <Link to="/Shopitem">Continue Shopping</Link>
      </div>
        
      </div>
     )}
    </>
  )
}

export default Cart;