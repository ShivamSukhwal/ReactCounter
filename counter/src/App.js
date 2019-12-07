import React, { Component } from "react";
import randomcolor from "randomcolor";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      const newColor = randomcolor();
      this.setState({ color: newColor });
    }
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
      <div style={{ borderStyle: "solid", borderColor: this.state.color }}>
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
