import "../stylesheets/Navbar.css";
import Logo from "../assets/imgs/logo2.png";

export function Navbar() {
  return (
    <nav className="topnav" id="nav-bar">
      <img className="header-logo" src={Logo} alt="logo" />
      <a
        className="nav-link_2"
        href="https://github.com/CharlyBGood"
        rel="noreferrer"
        target="_blank"
      >
        GitHub
      </a>
    </nav>
  );
}
