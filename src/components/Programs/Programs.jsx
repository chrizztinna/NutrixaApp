import React from 'react'
import "./Programs.css"
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (

    

   <div className="Programs" id="programs">

        { /* header */}
        <div className="programs-header">
            <span className="stroke-text">Programs</span>
            <span>Built Just</span>
            <span className="stroke-text">For You</span>
        </div>
    
      <div className="program-categories">
        {programsData.map((program)=>(
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>More Info</span></div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default Programs
