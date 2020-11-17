import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const frontEnd = function () {


  return (

    <StaticQuery query={graphql`
            {
  allWordpressWpPortfolio(filter: {title: {eq: "Front-End"}}) {
    edges {
      node {
        title
        slug
        excerpt
        content
        featured_media {
          source_url
        }
      }
    }
  }
}
 `   } render={props => (props.allWordpressWpPortfolio.edges.map(item =>

      <div className='container'>
        <h2 className='text-center font-weight-bold m-3'> {item.node.title}</h2>
        <img className='mx-auto w-75 img-thumbnail d-block  ' src={item.node.featured_media.source_url} />
        <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
        <p className='card-text' dangerouslySetInnerHTML={{ __html: item.node.content }}></p>

      </div>


    ))}

    >

    </StaticQuery>
  )

}

export default frontEnd