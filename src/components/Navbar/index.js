import React from 'react';
import { FaBars } from 'react-icons/fa';
import {} from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavabarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>pluginary</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='about'>À propos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='discover'>Découvrir</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='signup'>Se connecter</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/singnin">S'inscrire</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
