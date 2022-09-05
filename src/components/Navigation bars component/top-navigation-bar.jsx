import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function TopNavigationBar(){
    return (
        <div className='lg:hidden'>
            <div className=' lg:hidden w-screen h-16 bg-violet-700'>
             <div className='float-right p-3 lg:hidden'>
            <FontAwesomeIcon icon={faBars} size='xl'/>
           </div>
        </div> 
        </div>
       
    )
}