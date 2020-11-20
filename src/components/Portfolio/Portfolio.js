import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import ContactForm from '../HomePage/ContactForm'



const portfolio = function () {

  return (
    <div>
      <div className='card-group row'>



        <StaticQuery query={graphql`
        
        {
  allWordpressWpPortfolio {
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
 `  } render={props => (
            props.allWordpressWpPortfolio.edges.map((item, index) => {


              return (
                <div class="col-md-4 mb-4" key={item}>
                  <div className='border mx-auto'>
                    <img className='w-100' src={item.node.featured_media.source_url} />
                    <div class="card-body">
                      <h3 className='card-title'> {item.node.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                      <Link to={`/portfolio/${item.node.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              )


            }

            )
          )}
        />

      </div>
      <ContactForm />
    </div>

  )

}

export default portfolio

