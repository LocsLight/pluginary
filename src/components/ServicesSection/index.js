import React from 'react'
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-2.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesCard,
    ServicesIcon,
    ServicesWrapper,

} from './ServicesElements'

const ServicesSection = ({ imgStart})=> {
    return (
        <div>
            <ServicesContainer  id={"services"}>
                <ServicesH1>Les offres</ServicesH1>
                <ServicesWrapper> 
                    <ServicesCard imgStart={imgStart}>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Site vitrine</ServicesH2>
                        <ServicesP>Une page de présentation de votre entreprise. Votre carte de visite</ServicesP>
                    </ServicesCard>
                    <ServicesCard imgStart={imgStart}>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Application Web</ServicesH2>
                        <ServicesP>Une interface web avec les fonctionnalités dont vous avez besoin</ServicesP>
                    </ServicesCard>
                    <ServicesCard imgStart={imgStart}>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Application Mobile</ServicesH2>
                        <ServicesP>Une application mobile avec les fonctionnalités dont vous avez besoin</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </div>
    )
}

ServicesSection.propTypes = {

}

export default ServicesSection

