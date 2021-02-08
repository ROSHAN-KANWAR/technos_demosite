import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/image/logo (22).png"
import './index.css';
import Typical from 'react-typical'
import Footer from "./Footer";

import Team from "./Team";
const Home=()=>{
    document.title="Techno_Home_Page"
    return (
        <>
        <div className="container">
            <div className="row grow mt-4 pl-2 technos">
              <div className="hello col-md-6 order-lg-0 order-md-0 order-sm-1 order-1  mt-4 ml-4  pl-4">
          <h3 className="fw-light">Grow your Bussiness with  <b>Techno</b>
            </h3>
            <p className="my-3 ">
                    Techno Developer is a Team of Web and Mobile App Developers that helps 
                    Businesses to grow their Business in lowest cost.</p>
          <h5 className="mt-4 "> We are Create.."{' '}
             <Typical
             loop={Infinity}
             wrapper="i"
             steps={
                 [
                     'Web Application',
                     600,
                     'Android Application',
                     600,
                      'E-Commerse Website',
                     600,
                     'Social Media App',
                    600,
                 ]
             }
             />"
          </h5>
            <NavLink className=" w-50  btn btn-outline-primary mt-6 d-block mt-4" to="/service">Get Started</NavLink>    
            </div>
            <div className="col-md-6 mt-5 order-lg-1 order-md-1 order-sm-0 order-0 ">
                <img src={web} className="mt-auto img-fluid" alt=".."/>
            </div>
        </div>

        <Team/>
        <Footer/>
        </div>
       
        </>
    )
}
export default Home