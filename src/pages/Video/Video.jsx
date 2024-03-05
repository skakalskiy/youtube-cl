import React from 'react';
import PlayVideo from '../../components/PlayVideo/PlayVideo';

import './Video.scss';

import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import Recommended from '../../components/Recommended/Recommended';



const Video = () => {
  return (
    <div className='play-container'>
        <PlayVideo/>
        <Recommended/>
    </div>
  )
}

export default Video;