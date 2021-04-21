import React, { Component } from 'react'


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {  };
  // }

  state={
    number:5
  }

  handleClick=()=>{
    console.log('hola');

    //NUNCA HACER ESTO
    // this.state.number++;
    this.setState({
      number: this.state.number + 1
    })

  }

  handleDecrementarState =()=>{
    
    this.setState({
      number: this.state.number-1
    })
  }

  handleResetState=()=>{
    
    this.setState({
      number: this.state.number =0
    })
  }

  render() {
    const {number} = this.props;

    return (
      <>
      <h1>hola {number} {this.state.number}</h1>
      <button onClick={this.handleClick}>incremento</button>
      <button onClick={this.handleDecrementarState}>Decremento</button>
      <button onClick={this.handleResetState}>Resetear</button>
      </>
    );
  }
}

export default App;