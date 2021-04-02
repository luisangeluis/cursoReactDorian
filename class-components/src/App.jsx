import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    console.dir(props);

    super(props);
    this.state = { otherNumber: 5 };
    console.log(this.state);
  }
  render() {
    const {name} = this.props;
    return (
      <h1>Class Componentt {name}</h1>
    );
  }
}

export default App;