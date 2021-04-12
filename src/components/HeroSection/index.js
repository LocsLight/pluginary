import React, {useState} from 'react'
import Video from '../../assets/videos/video.mp4'
import {Button} from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight

} from './HeroElements'

function HeroSection(props) {
    const [hover] =useState(false)

    const onHover = () => {

    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Artisan du numérique basé à Strasbourg</HeroH1>
                <HeroP>
                    Loic Lud vous aide à concrétiser vos projets. Inscrivez-vous, formulez votre demande, posez-moi vos question et vous serez recontacté par mail ou par téléphone.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        >
                        Démarrer {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

