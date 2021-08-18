import React, {Component} from 'react';
import './Navbar.css'
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

class Navbar extends Component {
    state= {clicked: false}

    MenuItems = [
        {
            title:'Accueil',
            url: '#',
            cName: 'nav-links'
        },
        {
            title:'Services',
            url: '#',
            cName: 'nav-links'
        },
        {
            title:'Produits',
            url: '#',
            cName: 'nav-links'
        },
        {
            title:'Contact',
            url: '#',
            cName: 'nav-links'
        },
        {
            title:'S\'inscrire',
            url: '#',
            cName: 'nav-links-mobile'
        },
    ]
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    } 
    closeMobileMenu = () => {

    }
    
    render() {
        return (
            <Nav>
                <NavbarContainer>
                    <NavLogo>loiclud.dev</NavLogo>
                    <MobileIcon>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </MobileIcon>
                    <NavMenu className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <NavItem>
                            <NavLinks className="nav-links" to ='/' smooth={true} duration={1000}>Accueil</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="disponibility" className="nav-links" smooth={true} duration={1000}>Disponibilités</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="expertise" className="nav-links" smooth={true} duration={1000}>Expertise</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="front-end" className="nav-links" smooth={true} duration={1000}>Front-End</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="back-end" className="nav-links" smooth={true} duration={1000}>Back-End</NavLinks>
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
        )
    }
}

export default Navbar;
