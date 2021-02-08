import React from 'react'
import { NavLink } from 'react-router-dom'

 const CommanBlog=(props)=>{
    return (
        <>
    
           <div className="col-xl-4  col-lg-6 px-1 col-md-6">
    <div className="card-decks carddek">
            <img src={props.web} class="card-img-top img-fluid rounded img-thumbnail" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.dec}</p>
           
                <NavLink to="/service" className="btn btn-primary  card-link">View Mores</NavLink>
            </div>
        </div>
    </div>
    
    </>
    )
 }
 export default CommanBlog