import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = ({ elements }) => {

  return (
    <Fragment>
      <nav>
        <div className="navbar">
          <img className="logo" src="/#" alt="" />
        </div>
        <section >
           
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={element.url}>{element.titulo}</Link>)
               })
           }
        </section>
      </nav>
    </Fragment>
  );
};

export default Navbar;
