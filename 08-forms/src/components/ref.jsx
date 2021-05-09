import React, { Component,createRef } from 'react'

class Ref extends Component {
    state = {  }

    constructor(){
        super()
        //inputText.puede ir sin constructor
        this.inputText =createRef();
    }

    //Este metodo sirve para hacer focus en automatico
    // componentDidMount(){
    //     this.handleFocus();
    // }

    handleFocus=()=>{
        console.log(this.inputText);
        this.inputText.current.focus();
    }

    render() {
        return (
           <>
            <input type="text" ref={this.inputText}/>
            <button onClick={this.handleFocus}>focus</button>
           </> 
        );
    }

}

export default Ref;
