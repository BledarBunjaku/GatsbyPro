import React from 'react'

import { StaticQuery, graphql, Link } from 'gatsby'

const allTogether = () => {

  return (
    <div className='card-group row'>
      <StaticQuery query={graphql`
        
        {
  allWordpressWpCareer {
    edges {
      node {
        title
        content
        excerpt
        slug
        categories {
          name
        }
      }
    }
  }
} 
 `  } render={props => (
          props.allWordpressWpCareer.edges.map(item => {




            return (
              <div class="col-md-4 mb-4" key={item}>
                <div className='border mx-auto'>
                  {/* <img className='w-100' src={item.node.featured_media.source_url} /> */}
                  <div class="card-body">
                    <h3 className='card-title'> {item.node.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                    <Link to={`/career/${item.node.slug}`}>Read more</Link>
                  </div>
                </div>
              </div>



            )
          }





          )
        )}
      /></div>)


}

export default allTogether