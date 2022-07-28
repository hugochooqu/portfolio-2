import React from 'react';
import ContactIcon from './contacticon';

export default function Sidenav(){
    return(
        <div className='w-screen h-screen bg-violet-700 lg:h-screen lg:w-96 lg:bg-violet-800/60' >
            <h1 className='lg:font-semibold lg:text-xl text-slate-100 pt-52 text-center brightness-200 tracking-tighter'><a href='/'>UGOCHUKWU VICTOR</a></h1>
            <p className='text-center text-neutral-100 text-lg pt-1'>FRONT-END WEB DEVELOPER</p>
            <nav>
                <ul  className='pt-6'>
                <li className='lg:pt-4  text-gray-200  text-center hover:underline'>
                   <a href='about'>ABOUT</a> 
                </li>
               
                <li className='lg:pt-2  text-gray-200  text-center hover:underline'>
                   <a href='contact'>CONTACT</a> 
                </li>
                 <li className='lg:pt-2 text-gray-200 text-center hover:underline '>
                    PROJECT
                </li>
                <li className='lg:pt-9 text-gray-200 text-center hover:underline '>
                    CV
                </li>
               
                </ul>
            </nav>
            <div>
                <p className='text-xs lg:pt-24 text-center text-neutral-100 '>
                    GET IN TOUCH
                </p>
                <ContactIcon />
            </div>
        </div>
    )
}