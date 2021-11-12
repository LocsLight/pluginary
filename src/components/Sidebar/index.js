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

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="disponibility" smooth={true} duration={1000} onClick={toggle}>Disponibilités</SidebarLink>
                    <SidebarLink to="expertise" smooth={true} duration={1000} onClick={toggle}>Expertise</SidebarLink>
                    <SidebarLink to="front-end" smooth={true} duration={1000}>Front</SidebarLink>
                    <SidebarLink to="back-end" smooth={true} duration={1000}>Back</SidebarLink>
                    <SidebarLink to="services" smooth={true} duration={1000}>Offres</SidebarLink>
                    <SidebarLink to="/signin" onClick={toggle}>S'inscrire</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to= '/signin'>S'inscrire</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

