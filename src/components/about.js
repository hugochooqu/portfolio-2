import React from 'react'
import Sidenav from './sidenav'

export default function About(){
    return (
        <div className='bckgnd flex'>
            <Sidenav />
            <div className='w-full p-7 leading-5 '>
                <h1 className='text-right  text-neutral-2clcl00 text-5xl font-semibold'>About Me</h1>
                    <h3 className=' text-right text-violet-700 text-xl font-semibold'>My story</h3>
                        <p className='text-right text-neutral-100'>I am a self-taught front-end developer located in Nigeria.
                        <br /> Well-organised person, problem solver interested in the
                        <br /> whole front-end spectrum and always open to learn more.
                        </p>
                     <br />
                        <h3 className=' text-right text-violet-700 text-xl font-semibold'>Education</h3>
                        <p className='text-right text-neutral-100'>Studied at University of Nigeria, Nsukka.<br /> B.sc degree in computer science</p>
                     <br />
                        <h3 className=' text-right text-violet-600 text-xl font-semibold'>Residence</h3>
                        <p className='text-right text-neutral-100'>Lagos, Nigeria</p>
                    <br />
                        <h3 className=' text-right text-violet-500 text-xl font-semibold'>Freelance</h3>
                        <p className='text-right text-neutral-100'>Available</p>
                    <br />
                        <h3 className=' text-right text-violet-500 text-xl font-semibold'>Skills</h3>
                        <p className='text-right text-neutral-100'>HTML5, CSS3, JavaScript, Tailwind, React, NEXT.js...</p>
                
            </div>
        </div>
    )
}