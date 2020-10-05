import { graphql } from 'gatsby'
import React, {useState} from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'
const StyledBurger = styled.div `
    border-radius: 50%;

    background-color: ${({open}) => open ? 'transparent' : props=> props.theme.colors.background};
    border: ${({open}) => open ? 'none' : '2px orange dotted'};
    width: 4rem;
    height: 4rem;
    position: fixed;
    top: 0.5rem;
    right: 1rem;
    padding: 0.25rem;
    z-index: 20;
    display: none;
    

    @media ${props => props.theme.breakpoints.mobile}{
        display: flex;
        align-items:center;
        justify-content: center;
        flex-flow: column;
        
    }

    div {
        width: 2rem;
        margin: 0.28rem;
        height: 0.25rem; 
        border-radius: 10px;
        background-color: ${props => props.theme.colors.bright1};
        transform-origin: 2px;
        transition: all 0.2s linear;

        &:nth-child(1){
            transform:${({open}) => open ? 'rotate(55deg) translateX(5%)' : 'rotate(0)'}; 
            
        }

        &:nth-child(2){
            transform:${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity:${({open}) => open ? 0 : 1};
        }

        &:nth-child(3){   
            transform:${({open}) => open ? 'rotate(-55deg) translateX(5%)' : 'rotate(0)'};
        
        }
    }

`;


export default function Burger (){
    const [open, setOpen] = useState(false);

    return(
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <RightNav open={open}/>
        </>
    )
}

