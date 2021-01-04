import React from 'react'
import { MenuItems} from "./MenuItems"
export default class NavBar extends React.Component {

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon">
          <i className="fab fa-react"></i>
        </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={MenuItems.cName} href={item.url}>
                {item.title}
                </a>
              </li>
            )
          })}
        </ul>

      </nav>
    );
  }
}