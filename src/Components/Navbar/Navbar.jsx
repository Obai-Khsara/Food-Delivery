import React, { useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/Images/assets"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../App'




const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(Data)

  return (
    <div className='navbar'>
        <Link to={"/"}>
            <img loading='lazy' className='logo' src={assets.logo} alt='imageLogo'/>
        </Link>
        <ul className="navbar-menu">
            <Link to={"/"} className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>Home</Link>
            <li className={menu==="menu"?"active":""} onClick={()=>setMenu("menu")}>
                <a href='#explore-menu'>Menu</a>
            </li>
            <li className={menu==="mobile-app"?"active":""} onClick={()=>setMenu("mobile-app")}>
                <a href='#app-download'>Mobile-app</a>
            </li>
            <li className={menu==="contact-us"?"active":""} onClick={()=>setMenu("contact-us")}>
                <a href='#footer'>Contact us</a>
            </li>
        </ul>

        <div className="navbar-right">
            <img loading='lazy' src={assets.search_icon} alt='searcImage'/>
            <div className="navbar-search-icon">
                <Link to={"/cart"}>
                    <img src={assets.basket_icon} alt='basketImage'/>
                </Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}>

                </div>
            </div>
            <button
            onClick={()=>setShowLogin(true)}
            >
                Sign in
            </button>
        </div>
    </div>
  )
}

export default Navbar