import React from 'react';

import './Recommended.scss';

import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Recommended = () => {
    return (
        <div className='recommended'>
            <div className="side-video-list">
                <img src={thumbnail1} alt="thumbnail1" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail2} alt="thumbnail2" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail3} alt="thumbnail3" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail4} alt="thumbnail4" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail5} alt="thumbnail5" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail6} alt="thumbnail6" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail7} alt="thumbnail7" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumbnail8} alt="thumbnail8" />
                <div className="vid-info">
                    <h4>Best channel that help to be a web dev</h4>
                    <p>GreatStack</p>
                    <p>199K Views</p>
                </div>
            </div>
           
     
        </div>
    )
}

export default Recommended;