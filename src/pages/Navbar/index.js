import React, {Component} from 'react';
import './Navbar.css'


class navbar extends Component {
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
    
    render() {
        return (
            <nav className="nav">
                <div className= "navabar-container">
                    <h1 className="navbar-logo">Loic Lud</h1>
                    <div className="mobile-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {this.MenuItems.map((item, index) => {
                            return(
                                <li className="nav-item">
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <nav className="nav-btn">
                        <a className="nav-btn-link" href="/singnin">S'inscrire</a>
                    </nav>
                </div>
            </nav>
        )
    }
}

export default navbar;
