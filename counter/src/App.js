import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    const increment = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };
    const decrement = () => {
      this.setState(prevState => {
        return {
          count: prevState.count - 1
        };
      });
    };

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
