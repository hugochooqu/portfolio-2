import React from 'react';

const CustomButton = ({ children, ...otherProps}) => (
    <button className='border-2 border-violet-600/50 hover:bg-violet-800/50 text-neutral-100 hover:text-neutral-100 h-12 w-48'
     {...otherProps}>
        {children}
    </button>
)

export default CustomButton