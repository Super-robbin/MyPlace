import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/pin.svg?react";
import Profile from "../Profile/Profile";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className="navbar">
      <h4 className="navbar__link">About</h4>
      <Link to="/" className="navbar__brand">
        <Logo />
        <h3 className="navbar__brand__heading">MyPlace.</h3>
      </Link>
      <ul className="navbar-nav">
        <li className="navbar__link">
          <Link to="/login">Log In</Link>
        </li>
        <li className="navbar__link">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      {
        path === "/" ? <Profile /> : null
      }
    </nav>
  );
}

export default Navbar;
