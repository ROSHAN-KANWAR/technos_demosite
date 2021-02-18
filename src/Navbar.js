import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../src/image/logo.svg"
const Navbar=()=>{

    return(
        <>
     <div className="container">
        <div className=" row ">
            <nav className=" navbar navbar-expand-lg navbar-light bg-light text-capitalize">
  <nav class="navbar navbar-light bg-light">
       <div class="container-fluid mt-1">
                    <NavLink class="navbar-brand  text-md-center text-sm-center " to="/">
                        <img src={logo} alt="" width="30" height="24"
                            class="d-inline-block align-center"/>
                    Techno
                    </NavLink>
                </div>
                </nav>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="bor collapse justify-content-end navbar-collapse hover" id="navbarNavDropdown">
                        <ul className="navbar-nav m-2">
                            <li className="nav-item">
                                <NavLink exact className="nav-link active" activeClassName="menu_active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact  className="nav-link" activeClassName="menu_active" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="menu_active" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/Photos">Photos</NavLink>
                            </li>
                        </ul>
                     
                    </div>
                    </nav>
        </div>
        
        </div>
        </>
    )
}
export default Navbar