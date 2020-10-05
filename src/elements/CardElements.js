//https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80
import { Link } from 'gatsby';
import styled from "styled-components"

export const BasicCardWrapper = styled.div`
  
   grid-column-end: span 4;
   height: 20rem;
   justify-content: center;
   position: relative;
   margin: 1rem;
   border: 2px green dashed;
   cursor: pointer;
   transition: all 0.3s ease 0s;
    filter: sepia(100%);
    
  
  
   @media ${props => props.theme.breakpoints.tablet}{
    grid-column-end: span 6;
    height: 22rem;
    margin: 1rem 0 0 0;
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-column-start: 1;
        grid-column-end: span 9;
        height: 18rem;
       
    }
    &:hover {

        filter: saturate(170%);
    }
    
` 
export const HoverText = styled.div`

    // text-decoration: none;
    // margin: auto;
    // position: absolute;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    color: black;
    -webkit-text-fill-color: black; 
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;


 
    &:hover {
        visibility: visible;
        opacity: 1;
        color: orange;
    }
`