import React from 'react'
import styled from 'styled-components'

const myColor = 'green';
const myPadding = '2em'

const StyledButton = styled.button`
    background-color: ${myColor};
    color:white;
    padding: ${myPadding};
    &:hover{
        background-color: red;
        color:${myColor};
    }
`

const Button =()=>{
    return(
        <>
            <button>click</button>
            <StyledButton>styled button</StyledButton>
        </>
    )
    
    
}

export default Button;