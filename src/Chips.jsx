import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Chips.css";
import Message from "./Message";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.makeCrisp = this.makeCrisp.bind(this);
    this.state = { text: false };
  }

  makeCrisp(e) {
    e.target.setAttribute("class", "Crisps");
    e.target.setAttribute("src", "crisps.png");
    // console.log(e);
    this.setState({
      text: true,
    });
  }

  render() {
    return (
      <body className="Chip-body">
        <Message>
          <h1>CLICK THE PACKET TO GET YOUR CHIPS!!!</h1>
          <Link to="/">Go Back</Link>
        </Message>

        <img
          src="chips.png"
          className="Chips-img"
          alt="Chip-packet"
          onClick={this.makeCrisp}
        />
        {this.state.text ? (
          <h1 className="message">HERE IS YOUR CHIPS!!! </h1>
        ) : null}
      </body>
    );
  }
}

export default Chips;

//   const cat = (
//     <div>
//   <img src="https://source.unsplash.com/Qmox1MkYDnY" alt="cat" onClick={makeDog}
//     />
//       <p>Click on the photo</p>
//     </div>
//   );
