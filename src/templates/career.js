import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';

export default ({ pageContext }) => {

    return (
        <Layout>
            <StaticQuery query={graphql`
            {
  allWordpressWpCareer {
    edges {
      node {
        title
        excerpt
        content
      }
    }
  }
}
 `   } render={props => (props.allWordpressWpCareer.edges.map(item => {
                if (pageContext.title === item.node.title) {

                    return <div className='container'>
                        <h2 className='text-center font-weight-bold m-3'> {item.node.title}</h2>
                        {/* <img className='w-75 mx-auto img-thumbnail d-block' src={item.node.featured_media.source_url} /> */}
                        <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                        <p dangerouslySetInnerHTML={{ __html: item.node.content }} />
                        {/* <p>{item.node.acf.text_title}</p> */}
                    </div>
                } else { return null }
            }
            ))} />
        </Layout>
    )
};