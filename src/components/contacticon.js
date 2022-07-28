import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

export default function ContactIcon (){
    return (
        <div className='flex justify-center pt-3 '>
        <a href='https://linkedin.com/in/nwanuma-ugochukwu'> <FontAwesomeIcon icon={faLinkedin} size="xl"  style={{ color: '#ffff' }} className='pr-3'/></a>
        <a href="https://twitter.com/UgochiVictor"> <FontAwesomeIcon icon={faTwitter} size="xl"  style={{ color: '#ffff' }} className='pr-3' /></a>
        <a href='https://github.com/hugochooqu'><FontAwesomeIcon icon={faGithub} size="xl"  style={{ color: '#ffff' }} /></a>
        </div>
    )
}