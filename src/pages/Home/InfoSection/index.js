import React from 'react'
import Button from '../../../components/Button'
import './infoSection.css'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt})=> {
    return (
        <div>
            <div className="info-container" lightBg={lightBg} id={id}>
                <div className="info-wrapper"> 
                    <div className="info-row" imgStart={imgStart}>
                        <div className="column-1">
                            <div className="text-wrapper">
                                <p className="topline">{topLine}</p>
                                <h1 className="heading" lightText={lightText}>{headline}</h1>
                                <div className="subtitles" darkText={darkText}>{description}</div>
                                <div className="btn-wrap">
                                    <Button to='home'>{buttonLabel}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="column-2">
                            <div className="img-wrap">
                                <img className="img" src={img} alt={alt}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection

