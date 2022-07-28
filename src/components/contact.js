import { faGithub, faLinkedin, faTwitter, faWhatsapp, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidenav from "./sidenav";

export default function Contact(){
    return(
        <div className="bckgnd flex">
       
            <Sidenav  /> 
            <div className='w-full lg:pt-24 lg:pr-16'>
            <h1 className='text-7xl font-semibold text-neutral-100 text-right'>Contact me</h1>
            <br/>
            <p className='text-right text-lg text-neutral-100 pb-2'>I’m interested in freelance opportunities and any idea of co-operation</p>
            <div className="float-right">
               <div className=" flex text-neutral-100 space-x-20">
                <p>Email: </p>
                <a href="mailto:hugotchee1@gmail.com" className="pl-7"><FontAwesomeIcon icon={faEnvelope}   style={{ color: '#ffff' }} /> hugotchee1@gmail.com</a>   
            </div>
          
            <div className=" flex pt-5 text-neutral-100 space-x-20">
                <p>linkedin:</p>
                <a href="https://linkedin.com/in/nwanuma-ugochukwu" className="pl-3"><FontAwesomeIcon icon={faLinkedin}   style={{ color: '#ffff' }} /> nwanuma-ugochukwu</a>   
            </div>
            <div className=" flex pt-2 text-neutral-100 space-x-20">
                <p> Twitter:</p>
                <a href="https://twitter.com/UgochiVictor" className="pl-5"><FontAwesomeIcon icon={faTwitter}   style={{ color: '#ffff' }}  /> UgochiVictor</a>   
            </div>  
            <div className=" flex pt-2 text-neutral-100 space-x-20">
                <p>Github:</p>
                <a href="https://github.com/hugochooqu" className="pl-5"> <FontAwesomeIcon icon={faGithub}   style={{ color: '#ffff' }} /> hugochooqu</a>   
            </div>
            <div className=" flex pt-2 text-neutral-100 space-x-20">
                <p> Whatsapp:</p>
                <a className=""><FontAwesomeIcon icon={faWhatsapp} solid  style={{ color: '#ffff' }}  /> +234-816-868-7346</a>   
            </div> 
     
            </div>

            
           
        </div>
           

        </div>
    )
}