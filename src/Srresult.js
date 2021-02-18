import React from 'react'
import "./index.css"
const Sresult=(props)=>{
    const img=`https://source.unsplash.com/400x300/?${props.name}`;
    return(
       <>
        <div className=" container">
  <div className="row"> 
         <div className=" col"></div>
                  <div className=" col-10 text-center mt-4">
        <img src={img} className="img-fluid"  alt="amazing"/> 
                  </div>
                           <div className=" col"></div>
    </div>


        </div>
        
       
       </>
    );
}
export default Sresult