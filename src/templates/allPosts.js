// import React from "react"
// import { graphql } from "gatsby"
// import {
//     Container,
//     Content,
//     Card,
//     FeaturedImage,
// } from "../components"

// const allPosts = ({pageContext,data}) => {
//    const posts = data.allMdx.eges
//     return(
//         <Container>
//             <Content>
//              {posts.map(post =>(
//                  <Card 
//                 key={post.node.frontmatter.slug}
//                 tag={post.node.frontmatter.tag}
//                 title={posts.node.frontmatter.title}
//                 slug = {posts.node.frontmatter.slug}
//             /> ))}
//             </Content>
//         </Container>
//     )
// }

// export const pageQuery = graphql`
//     query AllPostsQuery{
//         allMdx {
//             edges {
//               node {
//                 frontmatter {
//                   slug
//                   title
//                   tag
//                   featureImage {
//                     childImageSharp {
//                       id
//                     }
//                   }
//                 }
//               }
//             }
//           }
//     }
// `
