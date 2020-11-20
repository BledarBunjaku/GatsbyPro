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
}
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }


  const { allWordpressPage, allWordpressWpPortfolio, allWordpressWpCareer } = result.data

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
}
