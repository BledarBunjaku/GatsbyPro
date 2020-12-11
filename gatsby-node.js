const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/home'
  });

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
            title
            content
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            path
            status
            template
            title
            content
          }
        }
      }
      allWordpressWpCareer {
        edges {
          node {
            id
            path
            title
            slug
            content
            excerpt
      }
    }
  }
  
  allWordpressWpBlog {
    edges {
      node {
        id
        path
        title
        slug
        content
        excerpt
        wordpress_id
        featured_media {
        source_url
      }
      }
    }
  } 
}
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }


  const { allWordpressPage, allWordpressWpPortfolio, allWordpressWpCareer, allWordpressWpBlog } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)

  allWordpressPage.edges.forEach(edge => {

    createPage({

      path: edge.node.path,
      component: slash(pageTemplate),
      context: edge.node
    })
  })

  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(portfolioTemplate),
      context: edge.node
    })
  })

  const careerTemplate = path.resolve(`./src/templates/career.js`)

  allWordpressWpCareer.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(careerTemplate),
      context: edge.node
    })
  })










  // const blogTemplate = path.resolve(`./src/templates/blog.js`)

  // allWordpressWpBlog.edges.forEach(edge => {
  //   createPage({
  //     path: edge.node.path,
  //     component: slash(blogTemplate),
  //     context: edge.node
  //   })
  // })




  const blogs = result.data.allWordpressWpBlog.edges
  const blogsPerPage = 4
  const numberOfPages = Math.ceil(blogs.length / blogsPerPage)
  const blogPostListTemplate = path.resolve('./src/templates/blog.js')

  Array.from({ length: numberOfPages }).forEach((blog, index) => {
    createPage({
      component: slash(blogPostListTemplate),
      path: index === 0 ? '/blog' : `/blog/${index + 1}`,
      context: {
        post: blogs.slice(index * blogsPerPage, (index * blogsPerPage) + blogsPerPage),
        numberOfPages,
        currentPage: index + 1
      }
    })
  })

  const blogtemplate = path.resolve('./src/templates/blogitem.js')

  allWordpressWpBlog.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(blogtemplate),
      context: edge.node
    })
  })

}
