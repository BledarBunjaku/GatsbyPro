import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const someWork = () => {





  return (

    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'><h1>h111111</h1> <h1>h2222222222</h1>   </div>

        <StaticQuery query={graphql`
    
    {
  allWordpressPage(filter: {title: {eq: "Portfolio"}}) {
    nodes {
      acf {
        card1_content
        card1_title
        card2_content
        card2_title
        card3_content
        card3_title
        card4_content
        card5_content
        card4_title
        card5_title
        card6_content
        card6_title
        card1_img {
          localFile {
            childImageSharp {
              fixed  {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        card2_img {
          localFile {
            childImageSharp {
              fixed  {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        card3_img {
          localFile {
            childImageSharp {
              fixed  {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        card4_img {
          localFile {
            childImageSharp {
              fixed  {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        card5_img {
          localFile {
            childImageSharp {
              fixed  {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        card6_img {
          localFile {
            childImageSharp {
              fixed  {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
} 
`
        } render={props => (props.allWordpressPage.nodes.map(item =>
          <div className='container-fluid'>
            <div class="card-group">
              <div class="card m-2 shadow">
                <Img className='card-img-top img-fluid' fixed={item.acf.card1_img.localFile.childImageSharp.fixed} />
                <div class="card-body">
                  <h3 className='card-title'> {item.acf.card1_title}</h3>
                  <p className='card-text '>{item.acf.card1_content}</p>
                  <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>
                </div>
              </div>
              <div class="card m-2 shadow">
                <Img className='card-img-top img-fluid' fixed={item.acf.card2_img.localFile.childImageSharp.fixed} />
                <div className='card-body'>
                  <h3 className='card-title'> {item.acf.card2_title}</h3>
                  <p className='card-text '>{item.acf.card2_content}</p>
                  <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>
                </div>

              </div>
              <div class="card m-2 shadow">
                <Img className='card-img-top img-fluid' fixed={item.acf.card3_img.localFile.childImageSharp.fixed} />
                <div className='card-body'>
                  <h3 className='card-title'> {item.acf.card3_title}</h3>
                  <p className='card-text '>{item.acf.card3_content}</p>
                  <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>
                </div>

              </div>

            </div>

            <div class="card-group">
              <div class="card m-2 shadow">
                <Img className='card-img-top img-fluid' fixed={item.acf.card4_img.localFile.childImageSharp.fixed} />
                <div className='card-body'>
                  <h3 className='card-title'> {item.acf.card4_title}</h3>
                  <p className='card-text '>{item.acf.card4_content}</p>
                  <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>
                </div>

              </div>
              <div class="card m-2 shadow">
                <Img className='card-img-top img-fluid' fixed={item.acf.card5_img.localFile.childImageSharp.fixed} />
                <div className='card-body'>
                  <h3 className='card-title'> {item.acf.card5_title}</h3>
                  <p className='card-text '>{item.acf.card5_content}</p>
                  <a className='btn ' href='http://google.com' target='_blank'>Learn more</a>
                </div>

              </div>
              <div class="card m-2 shadow">
                <Img className='card-img-top img-fluid' fixed={item.acf.card6_img.localFile.childImageSharp.fixed} />
                <div className='card-body'>
                  <h3 className='card-title'> {item.acf.card6_title}</h3>
                  <p className='card-text '>{item.acf.card6_content}</p>
                  <a href='http://google.com' target='_blank'>Learn more</a>
                </div>

              </div>
            </div>
          </div>

        ))} />





        {/* 
                <div className='col-md-4'><h1>tttttttt</h1></div>
                    <div className='col-md-4'><h1>tttttttt</h1></div>
                    <div className='col-md-4'><h1>tttttttt</h1></div>
                    <div className='col-md-4'><h1>tttttttt</h1></div>
                    <div className='col-md-4'><h1>tttttttt</h1></div>
                </div> */}

      </div>
    </div>

  )

}

export default someWork



  // < div className='row' >
  //           <div className='col-md-12 text-center'> <h1>/////////////////////</h1></div>
  //           <div className='col-md-4 col-sm-6'>
  //           <div className='card-group'>
  //             <div className='card text-center'>
  //               <Img className='card-img-top img-fluid' fixed={item.acf.card1_img.localFile.childImageSharp.fixed} />
  //               <div className='card-body'>
  //                 <h3 className='card-title'> {item.acf.card1_title}</h3>
  //                 <p className='card-text '>{item.acf.card1_content}</p>
  //                 <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>

  //               </div>
  //             </div>
  //           </div>
  //           <div className='col-md-4 col-sm-6'>
  //             <div className='card text-center'>
  //               <Img className='card-img-top img-fluid' fixed={item.acf.card2_img.localFile.childImageSharp.fixed} />
  //               <div className='card-body'>
  //                 <h3 className='card-title'> {item.acf.card2_title}</h3>
  //                 <p className='card-text '>{item.acf.card2_content}</p>
  //                 <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>

  //               </div>
  //             </div>
  //           </div>
  //           <div className='col-md-4 col-sm-6'>
  //             <div className='card text-center'>
  //               <Img className='card-img-top img-fluid' fixed={item.acf.card3_img.localFile.childImageSharp.fixed} />
  //               <div className='card-body'>
  //                 <h3 className='card-title'> {item.acf.card3_title}</h3>
  //                 <p className='card-text '>{item.acf.card3_content}</p>
  //                 <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>

  //               </div>
  //             </div>
  //           </div>
  //           <div className='col-md-4 col-sm-6'>
  //             <div className='card text-center'>
  //               <Img className='card-img-top img-fluid' fixed={item.acf.card4_img.localFile.childImageSharp.fixed} />
  //               <div className='card-body'>
  //                 <h3 className='card-title'> {item.acf.card4_title}</h3>
  //                 <p className='card-text '>{item.acf.card4_content}</p>
  //                 <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>

  //               </div>
  //             </div>
  //           </div>
  //           <div className='col-md-4 col-sm-6'>
  //             <div className='card text-center'>
  //               <Img className='card-img-top img-fluid' fixed={item.acf.card5_img.localFile.childImageSharp.fixed} />
  //               <div className='card-body'>
  //                 <h3 className='card-title'> {item.acf.card5_title}</h3>
  //                 <p className='card-text '>{item.acf.card5_content}</p>
  //                 <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>

  //               </div>
  //             </div>
  //           </div>
  //           <div className='col-md-4 col-sm-6'>
  //             <div className='card text-center'>
  //               <Img className='card-img-top img-fluid' fixed={item.acf.card6_img.localFile.childImageSharp.fixed} />
  //               <div className='card-body'>
  //                 <h3 className='card-title'> {item.acf.card6_title}</h3>
  //                 <p className='card-text '>{item.acf.card6_content}</p>
  //                 <a className='btn btn-outline-primary' href='http://google.com' target='_blank'>Learn more</a>

  //               </div>
  //             </div>
  //           </div>
  //           </div>
  //         </div >
