import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/Images/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} loading='lazy'/>
            <img src={assets.app_store} loading='lazy'/>
        </div>
    </div>
  )
}

export default AppDownload