import React, { Component,useState } from 'react'

const EjemploHook = ()=>{

    //useState devueve un array con 2 posiciones el nombre del cual state es y setState() o metodo para fijar el estado...
    // a este metodo le pones set+nombre del state
    const [number,setNumber] = useState(10);

    const handleIncrement = ()=>{
        setNumber(number+1);
        console.log([number,setNumber])
    }

    const handleDecrement = ()=>{
        setNumber(number-1);
    }

    const handleReset = ()=>{
        setNumber(0);
    }

    return(
        <>
         <h1>Number: {number}</h1>
         <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
         <button onClick={handleReset}>Reset</button>


        </>
    );

}

export default EjemploHook;
