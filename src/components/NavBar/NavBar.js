import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button/Button"
import './NavBar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <a href="/" className="navbar-logo--a">
                  <h1 className="navbar-logo">
                    Jack Tawil 
                    {/* <i className="fab fa-centos"></i> */}
                  </h1>
                </a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
               <a href='/contact'><Button>Contact</Button></a>
            </nav>
        )
    }
}

export default Navbar