import React from 'react'
import "./Reasons.css"
import gym from "../../assets/gym.png"
import check from "../../assets/check.png"


const Reasons = () => {
  return (
    <div className="Reasons" id ="reasons">

        <div className="blur reasons-blur"></div>
        <div className="blur reasons2-blur"></div>



        <div className="left-r">
            <img src= {gym} alt="" />
        </div>
        <div className="right-r">
           
           <span>some reasons</span>
           
           <div>
                <span>Why</span>
                <span> choose us?</span>
           </div>

          <div className="details-r">
            <div><img src= {check} alt></img><span> Tailored workouts for you personally </span></div>
            <div><img src= {check} alt></img><span> Real-time feedback </span></div>
            <div><img src= {check} alt></img><span> Eliminates the need for hours of research </span></div>
            <div><img src= {check} alt></img><span> We offer a variety of workouts and meal plans</span></div>



          
          </div>
        </div>
    </div>
  )
}

export default Reasons
