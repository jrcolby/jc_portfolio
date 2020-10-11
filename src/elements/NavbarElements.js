import styled from "styled-components"


export const NavWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row 1 / 2;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    border: 2px dashed ;
    flex-flow: row nowrap;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 20;
    justify-content: space-between;
  
        border-color: ${props => props.theme.colors.bright1};
        animation-name: flash_border;
        animation-duration: 4s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        -webkit-animation-name: flash_border;
        -webkit-animation-duration: 4s;
        -webkit-animation-timing-function: ease;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-name: flash_border;
        -moz-animation-duration: 4s;
        -moz-animation-timing-function: ease;
        -moz-animation-iteration-count: infinite;
      
      
      @keyframes flash_border {
        0% {
          border-color: ${props => props.theme.colors.bright1};
        }
        50% {
          border-color: ${props => props.theme.colors.bright2};
        }
        100% {
          border-color: ${props => props.theme.colors.bright1};
        }
      }
      
      @-webkit-keyframes flash_border {
        0% {
          border-color: ${props => props.theme.colors.bright1};
        }
        50% {
          border-color: ${props => props.theme.colors.bright2};
        }
        100% {
          border-color: ${props => props.theme.colors.bright1};
        }
      }
      
      @-moz-keyframes flash_border {
        0% {
          border-color: ${props => props.theme.colors.bright1};
        }
        50% {
          border-color: ${props => props.theme.colors.bright2};
        }
        100% {
          border-color: ${props => props.theme.colors.bright1};
        }
      }


    .logo {
        display: flex;
        flex-shrink: 0;
        margin: 0px;
        padding: 1rem 1rem 1rem 1rem; 
        flex-flow: row nowrap;
        align-items: center;
    }

    a{
        font-family: ${props => props.theme.fonts.navlink};
        text-decoration: none;
        
        font-size: 1.5rem;
        color: ${props => props.theme.colors.bright2};

        &:visited {
            color: ${props => props.theme.colors.bright2};
       }

       &:hover {
           color: ${props => props.theme.colors.bright1};
       }
    }

   

    @media ${props => props.theme.breakpoints.tablet}{
       
        grid-column: 2 / span 6;
        
        
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 2 / span 4;
        justify-content: center;
        
    }
   
`;
 