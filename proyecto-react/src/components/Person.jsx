import React from 'react';

const Person = ({nombre, edad})=>{
    //console.log(props);
    return(
        <p>Hola soy {nombre} y tengo {edad}</p>
    )
}

export default Person;