import React from "react"
import { graphql } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import {Helmet} from "react-helmet"
import {Container,Post, Seo} from "../components"

const singlePost = ({data}) => {

    return(
       
        <Container>
        <Helmet>
      <title>Jim Colby</title>
    </Helmet>
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