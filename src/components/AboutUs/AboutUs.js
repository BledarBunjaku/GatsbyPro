import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const AboutUs = () => (



  <StaticQuery query={graphql`


                 {
  allWordpressPage(filter: {title: {eq: "About"}}) {
    nodes {
      acf {
        company_help_you_content
        company_help_you_title
        company_help_you_title1
        overview_content
        company_help_you_image {
          localFile {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        overview_title
        overview_title2
        page_title
        page_title1
        overview_image {
          localFile {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
}

  
        ` } render={props => (props.allWordpressPage.nodes.map(item => (

    <div className='row'>
      <div className='col-md-12 font-weight-bold text-center mb-5 mt-4'>
        <h1>{item.acf.page_title}</h1><h4>{item.acf.page_title1}</h4>
      </div>
      <div className='col-md-6 my-auto'>
        <h3 className='font-weight-bold'>{item.acf.overview_title}</h3>
        <h3>{item.acf.overview_title2}</h3>
        <p className='w-75'>{item.acf.overview_content}</p>
      </div>
      <div className='col-md-6'>
        <Img fixed={item.acf.overview_image.localFile.childImageSharp.fixed}></Img>
      </div>


      <div className='col-md-6 mt-5'>
        <Img fixed={item.acf.overview_image.localFile.childImageSharp.fixed}></Img>
      </div>
      <div className='col-md-6 my-auto pl-4'>
        <h3 className='font-weight-bold'>{item.acf.company_help_you_title}</h3>
        <h3>{item.acf.company_help_you_title1}</h3>
        <p className='w-75'>{item.acf.company_help_you_content}</p>
      </div>
    </div>
  )))
    }
  />




)

export default AboutUs;