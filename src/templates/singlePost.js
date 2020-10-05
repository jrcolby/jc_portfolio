import React from "react"
import { graphql } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import {H1} from "../elements"
import {Container,Post} from "../components"
import Img from "gatsby-image"
const singlePost = ({data}) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid

    return(
       //FeatureImage frompost
        <Container>
           
            <Post>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </Container>
    )
}


export default singlePost

export const pageQuery = graphql`
    query SinglePostQuery($id: String!){
        mdx (id: {eq: $id}){
            body
            frontmatter {
              slug
              title
              tag
              featureImage {
                childImageSharp {
                  fluid (maxWidth: 1200, quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
    }
`