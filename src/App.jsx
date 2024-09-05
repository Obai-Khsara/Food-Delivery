import React, { useState,lazy,Suspense } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx"
import LoginPopup from "./Components/LoginPopup/LoginPopup.jsx"

import { createContext } from 'react'
import { food_list } from './assets/Images/assets.js'

export const Data = createContext(null)

const App = () => {
  const Footer = lazy(()=> import("./Components/Footer/Footer.jsx"))
  const Cart = lazy(()=> import("./Pages/Cart/Cart.jsx"))
  const PlaceOrder = lazy(()=> import("./Pages/PlaceOrder/PlaceOrder.jsx"))



    // The below rows to work as a global variables and function
    const [cartItems,setCartItems] = useState({})

      const addToCart = (itemId) =>{
          if(!cartItems[itemId]){
          setCartItems((prev)=> ({...prev,[itemId]:1}))
          }else{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          }
      }
      const removeFromCart = (itemId)=>{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

      const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for ( const item in cartItems){
          if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=> product._id === item)
            totalAmount += itemInfo.price * cartItems[item]
          }
        }
        return totalAmount
      }




  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {
      showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
      <div className='app'>
        <Data.Provider value={{cartItems,addToCart,removeFromCart,getTotalCartAmount}}>
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={
              <React.Suspense fallback={<>...</>}>
                <Cart />
              </React.Suspense>
            }/>
            <Route path='/order' element={
              <React.Suspense fallback={<>...</>}>
                <PlaceOrder />
              </React.Suspense>
            }/>
          </Routes>
        </Data.Provider>
      </div>
      <Suspense fallback={<>...</>}>
        <Footer/>
      </Suspense>
    </>
  )
}

export default App