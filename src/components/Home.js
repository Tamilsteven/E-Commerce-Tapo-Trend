import React, { useState } from 'react'
import "../styles/home.css"
import img1 from "../assets/Images/pexels2.jpg"
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDiningOutlined';
import VerifiedIcon from '@mui/icons-material/VerifiedOutlined';
import data from '../data/latest';
const Home = () => {
  const[list ,setlist] = useState(data)
  console.log(setlist);
  return (
    <>
    <section className='section'>
    <img src={img1} alt='img1' className='imgs'/>
    <div className='shop'>
      <h1>Summer <br/> Collection!</h1>
      <p className='para'>25% Off On All Products</p> 
    <a href="/login" target="_self" ><button type='submit' className='btn btn-light'>SHOP IT NOW →</button></a> 
    </div>
    </section>
      
      <section className='section1'>
      <h2>Why Shop With Us </h2>
<div className="service">
<div class="card" >
  <div class="card-body">
    <sapn class="card-title"><DeliveryDiningIcon sx={{fontSize:60}}/></sapn>
    <h4 class="card-subtitle">Fast Delivery</h4>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
<div class="card" >
  <div class="card-body">
    <sapn class="card-title"><LocalShippingIcon sx={{fontSize:60}}/></sapn>
    <h4 class="card-subtitle">Free Shipping</h4>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
<div class="card" >
  <div class="card-body">
    <sapn class="card-title"><VerifiedIcon sx={{fontSize:60}}/></sapn>
    <h4 class="card-subtitle">Best Quality</h4>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>

</div>
      </section>
      <section className='section2'>
      <div className="latest">
        <h3 >Latest Sale</h3>
       </div>
       <div className="group">
{list.map((item,index)=>{
           return(
    <div class="gallery" >
    <div key={index}>
    <img src={item.img} className='photos' alt=''/>
    <div className="title">
    <p className='price'>{item.para}</p>
    <h5>{item.title}</h5>
   <a href="/Shopitem"><button type='submit' className='product-btn'>Shop Now</button></a> 
    </div>
   
  </div>
  </div>
           )
        })
        }
       </div>   
      </section>
      <section className='section3'>

      </section>

   
    </>
  )
}

export default Home