import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const mobileDeveloper = function () {


    return (

        <StaticQuery query={graphql`
            {
  allWordpressWpPortfolio(filter: {title: {eq: "Mobile-Developer"}}) {
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
                <img className='w-75 mx-auto img-thumbnail d-block' src={item.node.featured_media.source_url} />
                <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                <p dangerouslySetInnerHTML={{ __html: item.node.content }} />

            </div>


        ))}

        >

        </StaticQuery>
    )

}

export default mobileDeveloper