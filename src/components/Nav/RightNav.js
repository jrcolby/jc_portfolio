import React, {useState} from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby';

const OtherNav = styled.ul`

        list-style: none;
        display: flex;
        flex-shrink: 0;
        margin: 0;
        padding: 20x 10px 10px 10px;
        flex-flow: row nowrap;
        
        
    a{
        font-family: ${props => props.theme.fonts.navlink};
        // text-decoration: none;
        font-size: 1.5rem;
        
        color: ${props => props.theme.colors.bright2};

        &:visited {
            color: ${props => props.theme.colors.bright2};
       }

       &:hover {
           color: ${props => props.theme.colors.bright1};
       }
    }
  

    li{
        padding: 10px 10px; 
        
    }

    @media ${props => props.theme.breakpoints.mobile} {
        flex-flow: column nowrap;
        position: fixed;
        background-color: ${props => props.theme.colors.bright2};
        
        transform:${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 15rem;
        padding-top: 4.5rem;
        padding-left: 3rem;
        transition: transform 0.05s ease-in-out;

        li {
            color: #000;
            text-decoration: none;
        }
                
    a{
        font-family: ${props => props.theme.fonts.navlink};
        text-decoration: none;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.bright1};

        &:visited {
            color: ${props => props.theme.colors.bright1};
       }

       &:hover {
           color: ${props => props.theme.colors.bright2};
       }
    }
    }
`;
export default function RightNav({ open }){

    return (
    <OtherNav open={open}>
        <li><Link to ="/about">ABOUT/</Link></li>
        <li>
            <svg viewBox="0 0 15 15" fill="transparent" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <a href="https://instagram.com/ruff_idyll">
                 <path d="M11 3.5h1M4.5.5h6a4 4 0 014 4v6a4 4 0 01-4 4h-6a4 4 0 01-4-4v-6a4 4 0 014-4zm3 10a3 3 0 110-6 3 3 0 010 6z" stroke="currentColor"></path>
                 </a>
            </svg>
        </li>
        <li>
                <svg viewBox="0 0 15 15" fill="transparent" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                    <a href="https://github.com/jrcolby">
                    <path d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z" fill="currentColor"></path>
                    </a>
                </svg>
        </li>
     </OtherNav>
    )
}