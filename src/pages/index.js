import React from "react"
import { Container } from "../components/Container"
import {Content} from "../components"
import {Card,Seo} from "../components"
import {Helmet} from "react-helmet"
import { graphql } from "gatsby"

export default function index({data}){
  
  return( 
    
   <Container>
    
    <Helmet>
      <title>Jim Colby</title>
    </Helmet>
    <Content>
  
     
    {data.allMdx.edges.map(edge =>(
      
       console.log(edge.node.frontmatter.title),
       <Card 
            key ={edge.node.frontmatter.slug}
            title={edge.node.frontmatter.title}
            slug={edge.node.frontmatter.slug}
            featureImage ={edge.node.frontmatter.featureImage.childImageSharp.fluid}
        />
         
    ))}
   
    
    
    </Content>
  </Container>
  )
}

export const query = graphql`
query {
  allMdx {
    edges {
      node {
        frontmatter {
          title
          slug
          featureImage {
            childImageSharp {
              fluid(maxWidth:800) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  }
}
`