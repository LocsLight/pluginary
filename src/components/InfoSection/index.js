import React from 'react'
import {Button} from '../ButtonElements'
import {
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    ImgWrap,
    Img,
    TextWrapper,
    TopLine,
    Heading,
    Subtitles,
    BtnWrap,
    InfoWrapper,

} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt})=> {
    return (
        <div>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper> 
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitles darkText={darkText}>{description}</Subtitles>
                                <BtnWrap>
                                    <Button to='home'>{buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

InfoSection.propTypes = {

}

export default InfoSection

