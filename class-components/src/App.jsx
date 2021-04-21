import React, { Component } from 'react'
/*
class App extends Component {
  constructor(props) {
    console.dir(props);

    super(props);
    this.state = { otherNumber: 5 };
    console.log(this.state);
  }
  render() {
    const {name} = this.props;
    const {number}=this.props;
    return (
      <h1>Class Componentt {name} {number}</h1>
    );
  }
}
*/
class App extends Component {
  //Inicializar el state con constructor
  
  constructor(props) {
    super(props);
    //this.state = { number: 5 };
    //console.log(this.state);
  }
  
  //iniciar state fuera de los metodos
  state={
    number: 5
  }
  render() {
    console.log(this.state);

    const {number, name} =this.props;
    return (
      <h1>Class component {number} {name}</h1>
    );

  }
}

export default App;

