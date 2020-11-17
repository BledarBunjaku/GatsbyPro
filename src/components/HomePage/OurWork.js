import React from "react"
import { } from "react-bootstrap"
import { StaticQuery, graphql } from 'gatsby';
import './Style/OurWork.scss';

import Img from 'gatsby-image';


const OurWork = () => (



  <StaticQuery query={graphql
    `{
          allWordpressPage(filter: {title: {eq: "Home"}}) {
            edges {
              node {
                acf {
                  section1_h1
                  section1_h2
                  section1_p1
                  section2_h1
                  section2_h2
                  section2_p1
                  section3_h1
                  section3_h2
                  section3_p1
                  section4_h1
                  section4_h2
                  section2_button {
                        url
                 }
                  section1_button_link1 {
                    url
                  }
                  section1_button_link2 {
                    url
                  }
                  section2_img {
                    localFile {
                      childImageSharp {
                        fixed (width: 400  ) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                  section3_img  {
                    localFile {
                      childImageSharp {
                        fixed  (width: 400 ){
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
             
` } render={props => (props.allWordpressPage.edges.map(



      item => <div className='row mt-4'>

        <div className='col-md-12 text-center'>
          <h1 className='font-weight-bold'>{item.node.acf.section1_h1}</h1>
          <h1>{item.node.acf.section1_h2}</h1>
          <p>{item.node.acf.section1_p1}</p>
          <div><button className='px-3 py-1 mr-3 button bg-transparent rounded'><a href={item.node.acf.section1_button_link1.url} target='_blank' rel="noopener" rel='noreferrer'>Our Work</a></button>
            <button className='px-3 py-1 ml-3 button bg-transparent rounded' ><a href={item.node.acf.section1_button_link2.url} target='_blank' rel="noopener" rel='noreferrer'>Know More</a></button>
          </div>

        </div>
        <div className='col-md-12 text-center background-wrapper'>
          <div className='col-md-12'></div>
        </div>

        <div className='col-md-6'>

          <h1 className='pt-5'>{item.node.acf.section2_h2}</h1>
          <h1 className='font-weight-bold'>{item.node.acf.section2_h1}</h1>
          <p>{item.node.acf.section2_p1}</p>
          <button className='px-3 py-1 button bg-transparent rounded' ><a href={item.node.acf.section2_button.url} target='_blank' rel="noopener" rel='noreferrer'>Know More</a></button>

        </div>

        <div className='col-md-6 text-center'>

          <Img fixed={item.node.acf.section2_img.localFile.childImageSharp.fixed} />


        </div>

        <div className='col-md-6 text-center'>

          <Img fixed={item.node.acf.section3_img.localFile.childImageSharp.fixed} />

        </div>

        <div className='col-md-6'>


          <h1 className='pt-5'>{item.node.acf.section3_h2}</h1>
          <h1 className='font-weight-bold'>{item.node.acf.section3_h1}</h1>
          <p>{item.node.acf.section3_p1}</p>

        </div>


        <div className='col-md-12 text-center mt-5 mb-3'>
          <h1  >{item.node.acf.section4_h1}</h1>
          <h1 className='font-weight-bold'>{item.node.acf.section4_h2}</h1>


        </div>


      </div>
    ))} />

)

export default OurWork;