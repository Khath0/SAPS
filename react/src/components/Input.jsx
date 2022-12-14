import React from "react";
import styled from "styled-components";

export default function Input({type,placeholder}){
    return <StyledInput type={type} placeholder={placeholder}/>;
}

const StyledInput = styled.input`
    background : rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    &:focus{
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe;
        backdrop-filter: blur(12);
    }
    &::placeholder{
        color: #454545;
        font-weight: 100;
        font-size: 1.2rem;
    }
`;  
/*
const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

*/