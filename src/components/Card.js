import React from "react"
import {HoverText, BasicCardWrapper, P,H1} from "../elements"
import  Img from "gatsby-image"
import {Link} from "gatsby"


 export const Card =({title, slug, featureImage}) => {
   

    return (<BasicCardWrapper>
            <Link to ={slug}>
           <Img
            fixed={featureImage}
            style={{
                // height:"20rem",
                flexShrink: 0,
                minWidth: "100%",
                minHeight: "100%",
                }} />
                <HoverText><H1 textAlign="center" margin="0 0 1rem 0">
                 {title}
             </H1>    </HoverText>
                </Link>

{/*             
        <StyledLink to={slug}>

        </StyledLink>
      */}
        </BasicCardWrapper>)
}





