import styled from 'styled-components'
/*
    ServicesContainer,
    ServicesWrapper,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesCard,
    ServicesIcon,
    Icon1,
    Icon2,
*/

export const ServicesContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #010606;
    padding: 50px;


    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        grid-template-row: 1fr 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    `

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    max-width: 340px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    padding: 32px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.div`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width:480px){
        font-size: 2rem
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.div`
    font-size: 1rem;
    text-align: center;
`
