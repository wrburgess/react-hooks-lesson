import React, { Component } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <LeftSide />
        <RightSide />
      </div>
    );
  }
}

export default App;
