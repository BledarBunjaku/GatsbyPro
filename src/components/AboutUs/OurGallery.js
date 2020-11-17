import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';


const OurGallery = () => (

    <StaticQuery query={graphql` 
    
                        {
  allWordpressPage(filter: {title: {eq: "About"}}) {
    edges {
      node {
        id
        acf {
          img_1 {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          img_2 {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          img_3 {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          img_4 {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          img_5 {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          img_6 {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          img_7 {
            localFile {
              childImageSharp {
                fixed (width: 622  , height: 305 ) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          main_img  {
            localFile {
              childImageSharp {
                fixed (width: 585  , height: 601 ) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          gallery_title
        }
      }
    }
  }
} 
    `
    } render={props => (props.allWordpressPage.edges.map(item => (

        <div className='row'>
            <div className='col-md-12 text-center font-weight-bold mt-5 mb-2'><h1>{item.node.acf.gallery_title}</h1></div>
            <div className='col-md-6'><Img fixed={item.node.acf.main_img.localFile.childImageSharp.fixed} /></div>
            <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-6'><Img fixed={item.node.acf.img_1.localFile.childImageSharp.fixed} />  </div>
                    <div className='col-md-6'><Img fixed={item.node.acf.img_2.localFile.childImageSharp.fixed} /></div>
                    <div className='col-md-6'><Img fixed={item.node.acf.img_3.localFile.childImageSharp.fixed} /></div>
                    <div className='col-md-6'><Img fixed={item.node.acf.img_4.localFile.childImageSharp.fixed} /></div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-6'><Img fixed={item.node.acf.img_5.localFile.childImageSharp.fixed} /></div>
                    <div className='col-md-6'><Img fixed={item.node.acf.img_6.localFile.childImageSharp.fixed} /></div>
                </div>
            </div>
            <div className='col-md-6'><Img fixed={item.node.acf.img_7.localFile.childImageSharp.fixed} /></div>







        </div>





    )))}




    />


)

export default OurGallery