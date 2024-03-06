import React from 'react'
import "../styles/contact.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import picture from "../assets/Images/shopping.jpg"
const Contact = () => {
  return (
    <>
        <div className="back">
        <img className='back-img' src={picture} alt="pic" />
     </div>
     <p className='parag'>Let's have a talk</p>
     <div className="grid">
       <div className="contact">
        <h3 >Get in touch</h3>
        <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        <p className='text-left'><LocationOnOutlinedIcon sx={{fontSize:"20px"}}/>123Fifth Avenue,New York</p>
        <p className='text-left'> <EmailOutlinedIcon sx={{fontSize:"20px"}}/> contact@info.com</p>
        <p className='text-left'> <LocalPhoneOutlinedIcon sx={{fontSize:"20px"}}/> 9089045654</p>
        </div>
      </div>
      <div className="form-wrapper">
           <h3 style={{fontWeight:"bolder"}}>Contact Us</h3>
           <form action="" method='post'>
            <div className='full-input'>
            <label htmlFor='name'>Full Name*</label>
            <input type="text" name="text" id="name" placeholder='Enter your name' />
            </div><br />
            <div className='full-input'>
            <label htmlFor='email'>Email*</label>
            <input type="email" name="email" id="email" placeholder='Enter your Email' />
            </div><br />
            <div className='full-input'>
            <label htmlFor='phone'>Phone*</label>
            <input type="phone" name="phone" id="phone" placeholder='Enter your Number' />
            </div><br />
            <div className='full-input'>
               <label htmlFor="Message">Message*</label>
                <textarea name="message" id="Message" placeholder='Message Here'></textarea>
            </div><br />
               <button type='submit' className='c-btn'>Submit <ArrowForwardIcon fontSize='7px'/></button>
           </form>
      </div>
     </div>
    </>
   
  )
}

export default Contact