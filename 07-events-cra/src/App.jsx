import React, { Component } from 'react'


class App extends Component {

  constructor(props) {
    super(props);
    //Para aceptar la funciones cuando no puedes usar funcion de flecha
    this.handleClick = this.handleClick.bind(this);
  }

  state={
    number:0
  }

  handleClick=()=>{
    
    this.setState({
      number:this.state.number+1
    })
    console.log(this);
    console.log(this.state);
  }

  render() {

    return (
      <>
      <h1>Event</h1>
      <button onClick={this.handleClick}>click me</button>
      <p>{this.state.number}</p>
      </>
    );
  }

}

export default App;
