// import React, {useState} from 'react';
import './Navbar.css'
import { FaBars } from 'react-icons/fa';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>loiclud.dev</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>                    
                        </MobileIcon>
                        <NavMenu>
                            
                            <NavItem>
                                <NavLinks to="disponibility" className="nav-links" smooth={true} duration={1000}>Disponibilités</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="expertise" className="nav-links" smooth={true} duration={1000}>Expertise</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="front-end" className="nav-links" smooth={true} duration={1000}>Front</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="back-end" className="nav-links" smooth={true} duration={1000}>Back</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services" className="nav-links" smooth={true} duration={1000}>Offres</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn >
                            <NavBtnLink>S'inscrire</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </>
        )
}

export default Navbar;
