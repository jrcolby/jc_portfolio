
import React from 'react'
import { createGlobalStyle, ThemeProvider} from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    body{
        background-color: ${props => props.theme.colors.background};
        font-family: ${props => props.theme.fonts.main};
    }
`;
export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
       <GlobalStyles /> 
       {element}
    </ThemeProvider>
    )
