import React, { Component, createRef } from 'react'
import './button.css'

import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: red;
    color:white;
`

// class button extends Component {
//     state = {  }

//     constructor(){
//         super()
//         this.saludo = createRef();
//         this.saludo2 = createRef();
//         this.input = createRef();



//     }
//     handleAlert=()=>{
//         console.log(this.input.current.value);
//         // alert('hola');
//     }

//     render() {
//         return (
//             <>
//                 <h1 ref={this.saludo}>angel</h1>
//                 <p ref={this.saludo2}>holass</p>
//                 <input type="text"  ref={this.input}/>
//                 {/* <button onClick={this.handleAlert} className='button'> click</button> */}
//             </>
//         );
//     }
// }

const button = () => {
    return (
        <StyledButton>click</StyledButton>
    )
}

export default button;
