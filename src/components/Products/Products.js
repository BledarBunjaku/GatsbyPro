import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'


function product() {

    return (

        <div className='card-group row'>
            <StaticQuery query={graphql`

            {
  allWordpressPage(filter: {title: {eq: "Product"}}) {
    nodes {
      acf {
        single_product {
          read_more_button {
            url
          }
          single_product_description_
          single_product_logo {
            localFile {
              childImageSharp {
                fixed (width: 100 , height: 35) {
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

` } render={props => (props.allWordpressPage.nodes.map(item => item.acf.single_product.map(item => (




                <div class="col-md-4 mb-4" key={item}>
                    <div className='border mx-auto'>
                        <Img className='w-50 card-image' fixed={item.single_product_logo.localFile.childImageSharp.fixed} />
                        <div class="card-body">
                            <p className='card-content'> {item.single_product_description_}</p>

                            <Link to={item.read_more_button.url} target='_blank'>Read more</Link>
                        </div>
                    </div>
                </div>




            ))))}

            />
        </div>

    )

}

export default product