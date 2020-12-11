import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import ContactForm from '../HomePage/ContactForm'
import './PortfolioStyle.scss'
const portfolio = function () {
  return (
    <div>
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
        acf {
          portfolio_title
        }
      }
    }
  }
}`  } render={props => (<div className='portfolio-wrapper'> <h3 className='pt-4'>{props.allWordpressWpPortfolio.edges[0].node.acf.portfolio_title}</h3> <div className='card-group row' >{
          props.allWordpressWpPortfolio.edges.map((item, index) => {
            return (
              <div class="col-md-4 card-wrap mb-1" key={item}>
                <div className='card'>
                  <div className=' mx-auto'>
                    <img className='card-image w-100' src={item.node.featured_media.source_url} alt='thumbnail' />
                    <div class="card-body">
                      <div className='card-title d-flex'><h3 className='card-title align-self-center'> {item.node.title}</h3></div>
                      <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                      <Link to={`/portfolio/${item.node.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>)
          })}) </div></div>)}
      />
      <ContactForm />
    </div>
  )
}
export default portfolio

