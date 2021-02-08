import React from 'react'
import web from "../src/image/logo (15).png"
import web2 from "../src/image/logo (17).png"
import web3 from "../src/image/logo (26).png"
import web4 from "../src/image/logo (5).png"
import CommanBlog from "./CommanBlog"

import Footer from "./Footer";
 const Blog=()=>{
           document.title="Techno_Blog_Page"
    return(
       <>
       <div className="container">
           <div className="row mt-5">
                <h2 className="">Blog</h2>
                <p className=" mt-2 text-center fw-light mt-1 mb-1">The following are the some broad Services offered by i3Developer but not limited with
                    the following. i3Developer Team
                    can also provide services that is not list below.</p>
                    </div>
            <div className="row py-5 my-2">
            
      <CommanBlog web={web} title="Kesham" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corporis
  cupiditate tempora"/>
      
      <CommanBlog web={web3} title="Techno" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corpori
nostrum quas sed dolore quos qui? Impedit?"/>
       <CommanBlog web={web2} title="Kesham" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corporis
  cupiditate tempora"/>
      
      <CommanBlog web={web3} title="Techno" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corpori
nostrum quas sed dolore quos qui? Impedit?"/>
       <CommanBlog web={web2} title="Kesham" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corporis
  cupiditate tempora"/>
      
      <CommanBlog web={web} title="Techno" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corpori
nostrum quas sed dolore quos qui? Impedit?"/>
       <CommanBlog web={web4} title="Kesham" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corporis
  cupiditate tempora"/>
      
      <CommanBlog web={web3} title="Techno" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corpori
nostrum quas sed dolore quos qui? Impedit?"/>
       <CommanBlog web={web2} title="Kesham" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corporis
  cupiditate tempora"/>
      
      <CommanBlog web={web3} title="Techno" 
      dec="
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Aperiam veritatis, non excepturi dolores corpori
nostrum quas sed dolore quos qui? Impedit?"/>
      
   
      </div>
      <Footer/>
      </div>
      </>
      
    )
 }
 export default Blog