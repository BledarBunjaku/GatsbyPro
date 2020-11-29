import React from 'react'

import { StaticQuery, graphql, Link } from 'gatsby'

const designer = () => {

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

            const arr = [...item.node.categories.map(items => items.name)]

            console.log('emriiiiiiiiiiiiiiarr', arr[0], arr[1])




            if (arr[0] == 'Designer' || arr[1] == 'Designer' || arr[2] == 'Designer') {


              return (
                <div class="col-md-4 mb-4" key={item}>
                  <div className='border mx-auto'>
                    {/* <img className='w-100' src={item.node.featured_media.source_url} /> */}
                    <div class="card-body">
                      <h3 className='card-title'> {item.node.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                      <Link to={`/wordpress-gatsby/career/${item.node.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              )
            }
            else { return null }
          }

          )
        )}
      /></div>)


}

export default designer