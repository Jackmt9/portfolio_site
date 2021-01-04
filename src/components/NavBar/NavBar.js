import React from 'react'
import { MenuItems} from "./MenuItems"
export default class NavBar extends React.Component {

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon">


        </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li><a className={MenuItems.cName}></a></li>

            )
          })}
        </ul>

      </nav>
    );
  }
}