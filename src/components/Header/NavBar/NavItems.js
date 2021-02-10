
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

function NavItems(props) {
  const [dropdown, setDropdown] = useState(true);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const cc=["nav-links"];
  if(dropdown){
    cc.push('active')
 }
 else {
     console.log("sfd")
 }

  return (
  
    
    <div>
      <ul className={props.clicked ? "nav-menu active" : "nav-menu"}>
        <li  className="nav-item" onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/" className={cc.join(' ')} onClick={props.closemenu}>
            About 
          </Link>
          {dropdown && <Dropdown />}
          
          
        </li>
        <li
          className="nav-item"
          >
          <Link to="/services" className="nav-links" onClick={props.closemenu}>
            Services 
          </Link>
         
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={props.closemenu}>
            Solutions
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact-us"
            className="nav-links"
            onClick={props.closemenu}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/sign-up"
            className="nav-links-mobile"
            onClick={props.closemenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;
