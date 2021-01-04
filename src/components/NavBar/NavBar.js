import React from 'react'
import {NavLink} from 'react-router-dom'
export default class NavBar extends React.Component {

  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  }
}