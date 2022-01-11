import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../media/Pregunta.png";
import "./Navbar.css";
const Navbar = ({ elements }) => {
  return (
    <Fragment>
      <nav className="navbar">
        <img className="logo" src={logo}></img>

        <ul className="nav-menu">
          {elements.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.url}>
                  {item.icon}
                  <span> {item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
