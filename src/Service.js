import React from 'react'
import web from "../src/image/logo (17).png";

import web2 from "../src/image/logo (25).png";
import svg from "../src/image/android.svg"
import './App.css';
import Work from "./work";
import Footer from "./Footer";
 const Service=()=>{
         document.title="Techno_Service_Page"
    return (
        <>
      
<div className="container">
      <div className="row mt-5">
          <div className=" col-lg-4 col-md-4 mt-5">
            <h2 className="text-left">About Service</h2>
            <p className="fw-arial">Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Qui explicabo placeat dolorem et exercitationem
                 aperiam minus dolores hic est, quia nam, corporis 
                 quisquam nulla voluptatum mollitia sunt cumque provident,
                  laudantium consequuntur quibusdam sed quaerat?
                 Perspiciatis cum facilis quibusdam animi non!</p>
            </div>
            <div className="col-lg-8 col-md-8 text-center mt-5">
                <img src={web} className=" img-fluid" alt=""/>
            </div>

          </div>
    
        <div className="row mt-3">
          
            <div className="col-lg-6 col-md-8  pt-4  order-lg-0 order-md-1 order-sm-1 order-1 ">
                <img src={web2} className=" img-fluid" alt=""/>
            </div>
            <div className="mt-2 col-lg-6 col-md-4 pt-4 order-lg-0 order-md-1 order-sm-0 order-0">
         <h2 className="">Benifit Of Service</h2>
                <p className="fw-arial">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Qui explicabo placeat dolorem et exercitationem
                    aperiam minus dolores hic est, quia nam, corporis
                    quisquam nulla voluptatum mollitia sunt cumque provident,
                    laudantium consequuntur quibusdam sed quaerat?
                    Perspiciatis cum facilis quibusdam animi non!</p>
            </div>
           
        </div>
     
        <div className="row mt-3">
            <div className="col-12">
                <h2 className="text-center">Our Services</h2>
            </div>
          <div className="col mt-3"></div>
        <div className="col-10 mt-3 text-center">
            <div className="row text-center font justify-content-between">
              <Work svg={svg} name="Mobile Apps"/>
              <Work svg={svg} name="Web Apps"/>
                <Work svg={svg} name="Market Analysis"/> 
            </div>
        </div>
        <div className="col"></div>
        </div>
        <div className="row mt-5 ">
            <div className="col-12">
                <h2 className="text-center">Our Customer Reviews</h2>
            </div>
            </div>
            <Footer/>

    </div>
    

        </>
    )
 }
 export default Service