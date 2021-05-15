import React, { Component, createRef } from 'react'
import './button.css'

class button extends Component {
    state = {  }

    constructor(){
        super()
        this.saludo = createRef();

    }
    handleAlert=()=>{
        console.log(this.saludo.current.textContent);
        // alert('hola');
    }

    render() {
        return (
            <>
                <h1 ref={this.saludo}>hola</h1>
                <button onClick={this.handleAlert} className='button'> click</button>
            </>
        );
    }
}

export default button;
