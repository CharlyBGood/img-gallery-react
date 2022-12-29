// import { NavLink } from "react-router-dom";
import "../stylesheets/Navbar.css";
import Logo from "../img/img-headerlogo.png";

export function Navbar() {
  return (
    <nav className="topnav" id="nav-bar">
      <a className="nav-link_1" href="#!">
        <img className="header-logo" src={Logo} alt="charly bgood logo" />
      </a>
      <a className="nav-link_2" href="#!">
        contact
      </a>
    </nav>
  );
}
