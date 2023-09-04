import React from 'react';


import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    };
  };

  return (
    <nav >
      <ul className='navbar'>
        <li>
          <NavLink style={checkIsactive} to="/">
            HOME
          </NavLink>
        </li>
       
        <li>
          <NavLink style={checkIsactive} to="/movies">
            MOVIES
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/avis">
            Avis
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;