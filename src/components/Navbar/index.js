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
                        <NavLogo to='/'>Pluginary</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>                    
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="disponibility" className="nav-links" smooth={true} duration={1000}>Dispo</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="expertise" className="nav-links" smooth={true} duration={1000}>Langage</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="front-end" className="nav-links" smooth={true} duration={1000}>Front</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="back-end" className="nav-links" smooth={true} duration={1000}>Back</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services" className="nav-links" smooth={true} duration={1000}>Service</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn >
                            <NavBtnLink to='/signin'>Se connecter</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </>
        )
}

export default Navbar;
