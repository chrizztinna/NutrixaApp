import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import woman_image from "../../assets/woman.png";

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
          <Header/>

{/* Nutrixa Slogan Heading */}
    <div className="hero-text">
      <div><span>
        Feel Good,</span></div>

        <div><span>
        Get Fit,</span></div>

        <div><span>
        Start today!</span></div>
    </div>
    
    {/* Sign Up and Log in buttons */}
    <div className="hero-buttons">
      <buttons className="btn">Get Started</buttons>
    </div>

     {/* Woman image */}
     <img src={woman_image} alt="" className="woman-image"/>


        </div>
        <div className="right-h">
          <button className='btn'>Log In</button>

         
        </div>

    </div>
  )
}
 
export default Hero