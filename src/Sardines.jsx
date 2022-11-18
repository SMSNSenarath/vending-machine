import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Sardines.css";

class Sardines extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>LET THEM SWIM!!!!</h1>
          <Link to="/">Go Back</Link>
        </Message>

        <div className="tank">
          <div className="fish">
            <img className="no1" src="fish.png" alt="" />
            <img className="no2" src="fish.png" alt="" />
            <img className="no3" src="fish.png" alt="" />
            <img className="no4" src="fish.png" alt="" />
            <img className="no5" src="fish.png" alt="" />
            <img className="no6" src="fish.png" alt="" />
            <img className="no1" src="fish.png" alt="" />
            <img className="no2" src="fish.png" alt="" />
            <img className="no3" src="fish.png" alt="" />
            <img className="no4" src="fish.png" alt="" />
            <img className="no5" src="fish.png" alt="" />
            <img className="no6" src="fish.png" alt="" />
            <img className="no1" src="fish.png" alt="" />
            <img className="no2" src="fish.png" alt="" />
            <img className="no3" src="fish.png" alt="" />
            <img className="no4" src="fish.png" alt="" />
            <img className="no5" src="fish.png" alt="" />
            <img className="no6" src="fish.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sardines;
