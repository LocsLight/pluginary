import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'


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
            <nav className="nav">
                <div className= "navabar-container">
                    <h1 className="navbar-logo">loiclud.dev</h1>
                    <div className="mobile-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink to ='/accueil' className="nav-links">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink to='/services' className="nav-links">Services</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink to='/parcours' className="nav-links">Parcours</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink to='/contact' className="nav-links">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink to='/singup' className="nav-links-mobile">S'inscrire</NavLink>
                                </li>
                    </ul>
                    <nav className="nav-btn">
                        <a className="nav-btn-link" href="/signin">S'inscrire</a>
                    </nav>
                </div>
            </nav>
        )
    }
}

export default Navbar;
