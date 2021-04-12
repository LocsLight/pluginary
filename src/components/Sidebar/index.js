import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarMenu,
    SidebarLink,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle})=> {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='about' onClick={toggle}>À propos</SidebarLink>
                    <SidebarLink to ='discover' onClick={toggle}>Découvrir</SidebarLink>
                    <SidebarLink to ='services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to ='singup' onClick={toggle}>S'inscrire</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to= '/singin'>S'inscrire</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

