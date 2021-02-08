import React from 'react'
import {useForm} from 'react-hook-form'

import Footer from "./Footer";
 const Contact=()=>{
    const {register,handleSubmit,errors}=useForm();
  
    const onSubmit =(values)=>{
alert("Form is Submitted")
  }
        return (
        <>
       <div class="container">
    <div class="row mt-4">
        <div class="col-8 ">
          <div class="col-md-12">
                <h2 class=" fw-light">Contact Us</h2>
                <p class=" mt-5">
                    Contact us with your Business need and Requirements
                    so that we can assist you in better way.
                    Please fill out following
                    contact form and we will get in touch with you shortly.
                </p>
          </div>
            <form onSubmit={handleSubmit(onSubmit)}>
           <div class="row">
               <div class="col-md-6">
                   <label htmlFor="Fname" >First Name :</label>
     <input type="text" name="Fname" ref={register(
         
         {required:true,minLength:3}
     )
         } class="form-control mt-2" placeholder="First name" aria-label="First name"/>
         <small className=" text-danger form-text">{errors.Fname && "This is Field is required"}</small>
               </div>
            <div class="col-md-6">
                    <label>Last Name :</label>
                <input type="text" name="Last name" ref={register({required:true})} class="form-control mt-2" placeholder="Last name" aria-label="First name"/>
            </div>
           </div>
          
               <div class="col-md-6">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" name="email" 
                ref={register(
                      {required:true,
                     
                    } )}
                class="form-control" id="exampleFormControlInput1" placeholder="test@example.com"/>
                 <small className=" text-danger form-text">{errors.Fname && "This is Field is required"}</small>
            </div>
               </div>
               <div class="col-6"></div>
           

                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Your Requirements :</label>
                            <textarea name="Tname" ref={register({required:true,maxLength:50})} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                             <small className=" text-danger form-text">{errors.Tname && "This is Field is required"}</small>
                        </div>
                    </div>
     
                <div class="col-auto">
                    <button type="submit" class="btn btn-success mb-3">Confirm identity</button>
                </div>     
            </form>
            </div>
        
        <div class="col-md-4 bg-light">
       <h2 class=" text-sm-center  fw-normal">About Sites</h2>
       <p class=" text-center mt-5">This Site is Designed and Developed by i3Developer</p>
       <h4 class="mt-5 text-center">Find Us</h4>
       <div class=" text-center">
            <p class=" text-muted ">Email :</p>
            <span>support@technos.com</span>
            
            <p>Phone: (+91) 7000268870</p>
         
            <p>Address: Taita, Chhibc State, India, Postal Code xxxxxx</p>
       </div>
        </div>
    </div>
    <Footer/>
</div>
        </>
    )
 }
 export default Contact