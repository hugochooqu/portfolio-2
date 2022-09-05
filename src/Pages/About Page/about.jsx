import React from 'react'

import Sidenav from '../../components/Navigation bars component/side-navigation-bar'

export default function About(){
    return (
        <div className='bckgnd h-screen lg:flex'>
            <Sidenav />
            <div className='w-full p-7 leading-5 '>
                <h1 className='lg:text-right text-right  lg:text-neutral-100 text-neutral-900 text-5xl font-semibold'>About Me</h1>
                    <h3 className=' lg:text-right text-right text-violet-700 text-xl font-semibold'>My story</h3>
                        <p className='lg:text-right text-right lg:text-neutral-100 text-neutral-900'>I am a self-taught front-end developer located in Nigeria.
                        <br className='hidden lg:block' /> Well-organised person, problem solver interested in the
                        <br className='hidden lg:block' /> whole front-end spectrum and always open to learn more.
                        </p>
                     <br />
                        <h3 className=' lg:text-right text-right text-violet-700 text-xl font-semibold'>Education</h3>
                        <p className='lg:text-right text-right lg:text-neutral-100 text-neutral-900'>Studied at University of Nigeria, Nsukka.<br /> B.sc degree in computer science</p>
                     <br />
                        <h3 className=' lg:text-right text-right text-violet-600 text-xl font-semibold'>Residence</h3>
                        <p className='lg:text-right text-right lg:text-neutral-100 text-neutral-900'>Lagos, Nigeria</p>
                    <br />
                        <h3 className=' lg:text-right text-right text-violet-500 text-xl font-semibold'>Freelance</h3>
                        <p className='lg:text-right text-right lg:text-neutral-100 text-neutral-900'>Available</p>
                    <br />
                        <h3 className=' lg:text-right text-right text-violet-500 text-xl font-semibold'>Skills</h3>
                        <p className='lg:text-right text-right lg:text-neutral-100 text-neutral-900'>HTML5, CSS3, JavaScript, Tailwind, React, NEXT.js...</p>
                
            </div>
         
        </div>
    )
}