import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import Pics from '../Profile-picture component/profilePicture';
import SocialHandles from '../Social-handles Component/social-handles';


export default function SideNavigationBar(){
    return(
        <div className='w-screen h-12  bg-violet-700 lg:h-screen lg:w-96 lg:bg-violet-800/60' >
           <div className='float-right p-3 lg:hidden'>
            <FontAwesomeIcon icon={faBars} size='xl'/>
           </div>
            <Pics />
            <div className=' lg:block hidden ' >
            <h1 className='lg:font-semibold lg:text-xl text-slate-100 pt-2 text-center brightness-200 tracking-tighter'><a href='/'>UGOCHUKWU VICTOR</a></h1>
            <p className='text-center text-neutral-100 text-lg pt-1'>FRONT-END WEB DEVELOPER</p>
            <nav>
                <ul  className='pt-6'>
                <li className='lg:pt-4  text-gray-200 hover:text-neutral-100  text-center hover:underline'>
                   <a href='about'>ABOUT</a> 
                </li>
               
                <li className='lg:pt-2  text-gray-200 hover:text-neutral-100 text-center hover:underline'>
                   <a href='contact'>CONTACT</a> 
                </li>
                 <li className='lg:pt-2 text-gray-200 text-center hover:text-neutral-100 hover:underline '>
                    PROJECT
                </li>
                <li className='lg:pt-9 text-gray-200 text-center hover:text-neutral-100 hover:underline '>
                    CV
                </li>
               
                </ul>
            </nav>
            <div>
                <p className='text-xs lg:pt-24 text-center text-neutral-100 '>
                    GET IN TOUCH
                </p>
                <SocialHandles />
            </div>
        </div>

        </div>
    )
}