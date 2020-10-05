import styled from "styled-components"

export const ContentWrapper = styled.div`
    grid-column: 2 / span 12;

    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.2rem));
    
    
    background-color: ${props =>props.theme.colors.background};
    gap: 0 2rem;

    }
    @media ${props => props.theme.breakpoints.tablet}{
        padding:0rem;
        grid-column: 2 / span 6;
        grid-row-start: 2;
        
    }
    @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 2/ span 6;
        grid-template-columns: repeat(6, minmax(auto, 4.2rem));

    }

` 

// padding: ${props =>
//     `${props.theme.spacings.xSmall} ${props.theme.spacings.xxSmall}`};


// padding: ${props =>
//     `${props.theme.spacings.medium} ${props.theme.spacings.small}`};