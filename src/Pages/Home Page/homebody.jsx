import React from 'react';

import CustomButton from '../../components/Custom-Button Component/CustomButton';

export default function HomeBody(){
    return(
        <div className='w-full  lg:pt-36 lg:pr-16 p-7 pt-44 lg:p-0'>
            <h1 className='text-5xl lg:text-7xl font-semibold lg:text-neutral-100 text-right'>Hi,</h1>
            <h1 className='text-5xl lg:text-7xl font-semibold lg:text-neutral-100 text-right'>I'm Victor,</h1>
            <h1 className='text-5xl lg:text-7xl font-semibold lg:text-neutral-100 text-right'>Web Developer</h1>
           <br/>
            <p className='text-right text-lg lg:text-2xl'>FRONT-END DEVELOPER</p>
           <div className='pt-32 lg:pt-6 float-right  space-y-3'>
                <CustomButton>Contact me</CustomButton>
                 
           </div>
        </div>
    )
}