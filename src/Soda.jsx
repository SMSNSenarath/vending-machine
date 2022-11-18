import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div>
        <img className="soda shake" src="can.png" alt="" />
        <Message>
          <h1>DON'T SHAKE THE COKE!!!</h1>
          <Link to="/">Go Back</Link>
        </Message>
      </div>
    );
  }
}

export default Soda;
