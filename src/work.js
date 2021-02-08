import React from 'react'
 const Work=(props)=>{
  
    return (
        <>
          <div className="col-3 green">
            <img src={props.svg} className=" img-fluid w-50 " alt=".." />
            <h5>{props.name}</h5>
                </div>
        </>
    )
 }
 export default Work