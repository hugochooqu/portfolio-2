import React from 'react';
import ContactButton from './contactmebutton';

export default function HomeBody(){
    return(
        <div className='w-full lg:pt-36 lg:pr-16'>
            <h1 className='text-7xl font-semibold text-neutral-100 text-right'>Hi,</h1>
            <h1 className='text-7xl font-semibold text-neutral-100 text-right'>I'm Victor,</h1>
            <h1 className='text-7xl font-semibold text-neutral-100 text-right'>Web Developer</h1>
           <br/>
            <p className='text-right text-2xl'>FRONT-END DEVELOPER</p>
            <div className='float-right pt-10'><ContactButton  /></div>
            
        </div>
    )
}