import React from 'react';

import '../styles/LogInPage.css'
import Video from "../styles/video.mp4";

const BackgroundVideo = () => {
    return (
        <div className='containerVideo'>
            <video autoPlay="autoplay" loop="loop" muted className='video'>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            
                   
               
     
    )
}

export default BackgroundVideo