import React from 'react'

import logo from "../src/image/logo.svg"
 const Footer=()=>{
  
    return (
        <>
      
    <div class="row bg-light justify-content-between mt-4">
<div class="col-md-3">
    <img src={logo} class="w-25 h-25 img-fluid rounded" alt=""/>
  <p>Techno Developer is a Team of Developers that delivers Website & Mobile Apps to 
        the Businesses, Start-ups, Institution etc.</p>
</div>
<div class="col-md-3 ">
    <h2 class="">Contact us</h2>
    <p class=" text-muted ">Email :</p>
    <span>support@technos.com</span>
   
    <p>Phone: (+91) 7000268870</p>
 
    <p>Address: Taita, Chhibc State, India, Postal Code xxxxxx</p>
</div>
<div class="col-md-3">
    <h3>Follow Us</h3>

</div>
<div class="col-md-12 bg-dark text-white">
    <p class="pt-2">@2021 technos || All Rights Reserved</p>
</div>
    </div>
 
        </>
    )
 }
 export default Footer