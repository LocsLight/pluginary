import React, {useState} from 'react'
import Video from '../../assets/videos/video.mp4'
import Button from '../Button';
import './HeroSection.css';

const HeroSection = () => {
    const [hover, setHover] =useState(false)

    const onHover = () => {
        setHover()
    }
    return (
        <div className="hero-container">
            <div className="hero-bg">
                <video className="video-bg" autoPlay loop muted src={Video} type='video/mp4'/>
            </div>
            <div className="hero-content">
                <h1 className="hero-h1">Développeur web</h1>
                <h1 className="hero-h1">basé à Strasbourg</h1>
                <p className = "hero-p">
                    Il est l'heure de coder vos projet
                </p>
                <div className="hero-btn-wrapper">
                    <Button
                        className='button primary'
                        link='signin' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        >
                        Démarrer  {hover ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-right"></i>}
                    </Button>
                </div>
            </div>
        </div>
    );
};



export default HeroSection;
