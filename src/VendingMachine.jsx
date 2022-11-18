import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>HI! TAKE WHAT YOU WANT...</h1>
        </Message>
        <img
          src="https://img.freepik.com/free-vector/cartoon-vending-machines-collection_52683-73163.jpg?w=1480&t=st=1668663633~exp=1668664233~hmac=720eab4647fe5cd480a096b6af2a41f9e846ebfae35d24acfff1770be972ba8e"
          alt=""
          className="vending-machine"
        />

        <Message>
          <Link to="/soda">Soda</Link>
          <Link to="/sardines">Sardines</Link>
          <Link to="/chips">Chips</Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
