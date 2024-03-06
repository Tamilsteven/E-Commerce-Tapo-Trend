import {useDispatch, useSelector } from "react-redux";
import "../../styles/shop.css"
import pic from "../../assets/Images/background.jpg"
import adidas from "../../assets/Images/Adidas.webp"
import allen from "../../assets/Images/allen.png"
import calvin from "../../assets/Images/calvinklein.jpg"
import puma from "../../assets/Images/puma.jpeg"
import biba from "../../assets/Images/biba.avif"
import fab from "../../assets/Images/fab.jpeg"
import levis from "../../assets/Images/Levis.jpg"
import louis from "../../assets/Images/louis.jpg"
import peter from "../../assets/Images/peter.webp"
import skecher from "../../assets/Images/Skechers.png"
import sparx from "../../assets/Images/sparx.jpg"
import wet from "../../assets/Images/wetside.webp"
//import { useState } from 'react';
//import data from "../../data/Productdata"
import { AddToCart } from "./Cartslice";
const Shopitem = () => {
 // const[Datas,setDatas] = useState(data)
   const item = useSelector((state)=>state.posts.items)
   const dispatch  = useDispatch()

  
     
  return (
   <>
     <div className="back">
        <img className='back-img' src={pic} alt="pic" />
     </div>
     <p className='parag'>Hot Summer Sale upto 25%</p>
  <div id="carouselExampleAutoplaying" className="carousel" data-bs-ride="carousel">
      <h3>Trending Brands</h3>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="">
      <img src={adidas} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={allen} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={calvin} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={puma} className="slide" alt="..."/>
    </div>
  
    <div className="carousel-item">
      <img src={biba} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={fab} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={levis} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={louis} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={skecher} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={peter} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={sparx} className="slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={wet} className="slide" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   <section className='cont'>
    <h3 style={{textAlign:"center"}}>Categories</h3>
       <div className="cat">
       <a className='cat' href="/shopitem">All</a>
       <a className='cat' href="/men">Mens</a>
       <a className='cat' href="/women">Womens</a>
       <a className='cat' href="/shoe">Shoes</a>
       </div>
       {/* {renderPost.map((post)=>{
          return(
            <div className="cards">
            <div className="view" key={post.id}>
            <img className='pics' src={post.img} alt=''/>
            <h5>{post.title}</h5>
            <p>{post.price}</p>
            <button >Shop Now</button>
           
                </div>
            </div>
          )
       })} */}
       
     {item.map(post=>(
        <div className="cards">
        <div className="view" key={post.id}>
        <img className='pics' src={post.img} alt=''/>
        <h5>{post.title}</h5>
        <p>{post.price}</p>
        <button className='shop-btn' type="submit" onClick={()=>dispatch(AddToCart(post))} >SHOP NOW</button>
       
            </div>
        </div>
       
       
    ))} 
   </section>
   </>
  )
}

export default Shopitem;