import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgba(255, 255, 255, 0.57)",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/chips"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgba(255, 255, 255, 0.57)",
          })}
        >
          Chips
        </NavLink>
        <NavLink
          to="/soda"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgba(255, 255, 255, 0.57)",
          })}
        >
          Soda
        </NavLink>
        <NavLink
          to="/sardines"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgba(255, 255, 255, 0.57)",
          })}
        >
          Sardines
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
