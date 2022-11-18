import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chips from "./Chips";
import Sardines from "./Sardines";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/sardines" element={<Sardines />} />
          <Route exact path="/soda" element={<Soda />} />
        </Routes>
      </div>
    );
  }
}

export default App;
