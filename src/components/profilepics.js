import React from 'react';
import pic from './assets/IMG_20210213_081406 (2).JPG'

export default function Pics (){
    return(
        <div>
         <img src={pic} alt='profilepics' className='h-40 w-36 hidden lg:block lg:mt-12 mx-auto rounded-full'></img>
        </div>
    )
}