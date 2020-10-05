import styled from "styled-components"

export const PostWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row-start: 3;
    padding: 1.5rem;
    background-color: ${props =>props.theme.colors.background};
    gap: 0 2rem;
    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 6;
    }

    p{
        font-size: 1rem;
        color: ${props=> props.theme.colors.dark};
        margin-top: 1rem;
    }
    .topImage{
        border: 20px red dashed:
    }
    .videoContainer{
        display: flex;
        justify-content: center;
        align-items: center;
       
    }

    .captionImage{
        margin-top: 1rem;
        font-size: .5rem;
        font-style: italic;
    }
` 


