
exports.createPages = async function({actions, graphql}){
    const {data} = await graphql(`
          query {
            allMdx {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                  id
                }
              }
            }
          }
       `)

       const numPosts = data.allMdx.edges.length


        console.log(data)      //create single blog post
       data.allMdx.edges.forEach(edge => {
           const slug = edge.node.frontmatter.slug
           const id = edge.node.id
           actions.createPage({
               path: slug,
               component: require.resolve('./src/templates/singlePost.js'),
               context: {id},
           })
       })
}