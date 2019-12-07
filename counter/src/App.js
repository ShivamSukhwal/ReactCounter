import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    const Increment = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={Increment}>Increment</button>
      </div>
    );
  }
}

export default App;
