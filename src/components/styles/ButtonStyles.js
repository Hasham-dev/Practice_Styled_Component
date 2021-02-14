import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 2rem;
    background-color: ${props => props.background};
    height: 100vh;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    
    h1{
        font-size: 3rem;
        color: ${props => props.primary ? "white" : "black"};

    }
    button{
        font-size: 2rem;
        padding: 1rem;
        border-radius: 10px;
        outline: none;
        font-weight: bold;
        color: ${props => props.primary ? "white" : "black"};
        background-color: ${props => props.primary ? "black" : "white"}
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    color: white;
`