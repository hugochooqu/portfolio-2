import { faGithub, faLinkedin, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidenav from "./sidenav";
import AboutButton from "./aboutbutton";
import HomeButton from "./homebutton";
import ProjectButton from "./projectbutton";
import CvButton from "./cvbutton";

export default function Contact(){
    return(
        <div className="bckgnd h-screen lg:flex">
       
            <Sidenav  /> 
            <div className='w-full p-7 lg:p-0 pt-24 lg:pt-24 lg:pr-16'>
            <h1 className=' text-4xl lg:text-7xl  font-semibold text-neutral-900 lg:text-neutral-100 text-right'>Contact me</h1>
            <br/>
            <p className='text-right lg:text-lg text-neutral-900 lg:text-neutral-100 pb-2'>I’m interested in freelance opportunities and any idea of co-operation</p>
            <div className="float-right">
               <div className=" flex text-neutral-900 lg:text-neutral-100 lg:space-x-20 space-x-12">
                <p>Email: </p>
                <a href="mailto:hugotchee1@gmail.com" className="pl-7"><FontAwesomeIcon icon={faEnvelope}   style={{ color: '#7C3AED' }} /> hugotchee1@gmail.com</a>   
            </div>
          
            <div className=" flex pt-5 text-neutral-900 lg:text-neutral-100 lg:space-x-20 space-x-12">
                <p>linkedin:</p>
                <a href="https://linkedin.com/in/nwanuma-ugochukwu" className="pl-3"><FontAwesomeIcon icon={faLinkedin}   style={{ color: '#7C3AED' }} /> nwanuma-ugochukwu</a>   
            </div>
            <div className=" flex pt-2 text-neutral-900 lg:text-neutral-100 lg:space-x-20 space-x-12">
                <p> Twitter:</p>
                <a href="https://twitter.com/UgochiVictor" className="pl-5"><FontAwesomeIcon icon={faTwitter}   style={{ color: '#7C3AED' }}  /> UgochiVictor</a>   
            </div>  
            <div className=" flex pt-2 text-neutral-900 lg:text-neutral-100 lg:space-x-20 space-x-12">
                <p>Github:</p>
                <a href="https://github.com/hugochooqu" className="pl-5"> <FontAwesomeIcon icon={faGithub}   style={{ color: '#7C3AED' }} /> hugochooqu</a>   
            </div>
            <div className=" flex pt-2 text-neutral-900 lg:text-neutral-100 lg:space-x-20 space-x-10">
                <p> Whatsapp:</p>
               <p ><FontAwesomeIcon icon={faWhatsapp} solid  style={{ color: '#7C3AED' }}  /> +234-816-868-7346 </p>  
            </div> 

                <div className="lg:hidden pt-44 float-right space-y-3">
                     <div >
                    <HomeButton />
                   </div> 
                   
                   <div >
                   <ProjectButton />
                   </div> 
                   <div >
                  <CvButton />
                   </div> 
                   <div >
                    <AboutButton />
                   </div>
                </div>
               
                    
                
            
     
            </div>

            
           
        </div>
           

        </div>
    )
}