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
                <h1 className="hero-h1">Développeur React basé à Strasbourg</h1>
                <p className = "hero-p">
                    Loic Lud, développeur freelance, vous aide à concrétiser vos projets. Inscrivez-vous, formulez votre demande, posez-moi vos question et vous serez recontacté par mail ou par téléphone.
                </p>
                <div className="hero-btn-wrapper">
                    <Button
                        className='button primary'
                        link='signup' 
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
