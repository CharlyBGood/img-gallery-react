import "../stylesheets/Navbar.css";
import Logo from "../assets/imgs/logo.png";

export function Navbar() {
  return (
    <nav className="topnav" id="nav-bar">
      <a className="nav-link_1" href="#!">
        <img className="header-logo" src={Logo} alt="charly bgood logo" />
      </a>
      <a className="nav-link_2" href="https://github.com/CharlyBGood" rel="noreferrer" target="_blank">
        GitHub
      </a>
    </nav>
  );
}
