import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    
    <div className='footer' id='footer'>  
        <div className="footer-content">  
            <div className="footer-content-left">  
                <img src={assets.logo} alt="" />  
                <p>Enjoy delicious meals delivered to your doorstep with just a few clicks. From local favorites to international cuisines, we've got you covered. Fast, reliable, and always fresh—because your cravings matter to us!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    </div> 
            </div>   
            <div className="footer-content-center">  
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>  
            <div className="footer-content-right">  
            <h2> GET IN TOUCH</h2>
            <ul>
                <li>1111111111</li>
                <li>sample@gmail.com</li>
            </ul>
            </div>  
        </div>  
        <hr/>
        <p className="footer-copyright">&copy; Copyright 2024  Abhishek Raj All Right Reserved.</p>
    </div>  
   
  )
}

export default Footer
