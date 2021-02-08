import React from 'react'
import './index.css';
import team1 from "../src/image/team1.jpg"

import team2 from "../src/image/team2.jpg"
import team3 from "../src/image/team3.jpg"
const Team =()=> {
    return (
       <>
   
         <div className="row justify-content-between mt-5 meet">
        
        <div className="col"></div>
      <div className="col-md-10 ">
        <h2 className=" text-center">Our Team Member</h2>
          <div className="row justify-content-between text-center my-2">
              <div className="col-md-3 my-2">
                <img src={team1} className=" img-fluid " alt=""/>
                <h3>John Sena</h3>
                <p>UI/UX Designer</p>
              </div>
            <div className="col-md-3 my-2">
                <img src={team2}  className=" img-fluid" alt=""/>
                <h3>Haina John</h3>
                <p>Backed-End Developer</p>
            </div>
            <div className="col-md-3 my-2">
                <img src={team3} className=" img-fluid" alt=""/>
                <h3>Haina John</h3>
                <p>Data Analysis</p>
            </div>
          </div>
      </div>
  <div className="col"></div>
        </div>


       </>
    )
}

export default Team