import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/Images/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img loading='lazy' src={assets.logo} alt='logo-image'/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam necessitatibus sed consequatur quia omnis quas eligendi tempora repellendus assumenda ducimus incidunt cumque magnam natus perferendis vel, possimus nisi ab? Quam?
                </p>
                <div className="footer-social-icons">
                    <img loading='lazy' src={assets.facebook_icon}/>
                    <img loading='lazy' src={assets.twitter_icon}/>
                    <img loading='lazy' src={assets.linkedin_icon}/>
                </div>
            </div>

            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+96176734997</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 &copy; Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer