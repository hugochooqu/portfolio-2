import React from 'react';
import AboutButton from './aboutbutton';
import ContactButton from './contactmebutton';
import CvButton from './cvbutton';
import ProjectButton from './projectbutton';

export default function HomeBody(){
    return(
        <div className='w-full  lg:pt-36 lg:pr-16 p-7 pt-44 lg:p-0'>
            <h1 className='text-5xl lg:text-7xl font-semibold lg:text-neutral-100 text-right'>Hi,</h1>
            <h1 className='text-5xl lg:text-7xl font-semibold lg:text-neutral-100 text-right'>I'm Victor,</h1>
            <h1 className='text-5xl lg:text-7xl font-semibold lg:text-neutral-100 text-right'>Web Developer</h1>
           <br/>
            <p className='text-right text-lg lg:text-2xl'>FRONT-END DEVELOPER</p>
           <div className='pt-32 lg:pt-6 float-right  space-y-3'>
                <div className='' ><ContactButton  /></div>
                <div className='lg:hidden' ><ProjectButton /></div>
                <div className='lg:hidden' ><CvButton /></div>
                <div className='lg:hidden' ><AboutButton /></div> 
           </div>
        </div>
    )
}