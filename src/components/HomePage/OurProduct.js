import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './Style/OurProduct.scss';
import Img from 'gatsby-image'
function product() {
  return (
    <div className='our-products single-page'>
      <div className=' bt-3 pb-2 '>
        <StaticQuery query={graphql`
            {
  allWordpressPage(filter: {title: {eq: "Home"}}) {
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
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        product_title
        product_content
      }
    }
  }
}
` } render={props => (<div> <div className='text-center pb-4'><h3>{props.allWordpressPage.nodes[0].acf.product_title}</h3>
            <p>{props.allWordpressPage.nodes[0].acf.product_content}</p>
          </div> <div className=' row mb-4'>  {props.allWordpressPage.nodes.map(item => item.acf.single_product.map(item => (

            <div class="col-md-4 mb-4" key={item}>
              <div className='card-wrapper '>
                <div className='text-center'>
                  <Img fixed={item.single_product_logo.localFile.childImageSharp.fixed} />
                </div>
                <div class="card-body">
                  <p className='pb-4 text-center'> {item.single_product_description_}</p>
                  <div className="text-center">
                    <Link to={item.read_more_button.url} target='_blank'>Read more</Link>
                  </div>
                </div>
              </div>
            </div>
          )))} </div></div>)}
        />
      </div>
    </div>
  )
}
export default product



// import React from 'react';
// import './Style/OurProduct.scss';
// import image from '../../images/aven.png'
// import image1 from '../../images/earth-2.0.png'
// import image2 from '../../images/hex-lab.png'
// import image3 from '../../images/ideaa.png'
// import image4 from '../../images/lighting.png'
// import image5 from '../../images/liva.png'



// const OurProduct = () => (

//     <div className="row">
//         <div className='col-md-12 owning-product'>
//             <div className='text-center '>
//                 <h1>Our Owning <strong>Product</strong> </h1>
//                 <p>This can lead to unexpected behavior when compiling.</p>
//             </div>
//         </div>

//         <div className='col-md-4 card-product'>
//             <div className='text-center  mt-5'>
//                 <img src={image} alt='thumbnail'></img>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
//                 <a href="https://google.com" target='_blank' rel="noreferrer">Learn more</a>
//             </div>

//         </div>

//         <div className='col-md-4 card-product'>

//             <div className='text-center  '>
//                 <img src={image1} alt='thumbnail'></img>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
//                 <a href="https://google.com" target='_blank' rel="noreferrer" >Learn more</a>
//             </div>
//         </div>

//         <div className='col-md-4 card-product'>

//             <div className='text-center  mt-5'>
//                 <img src={image2} alt='thumbnail'></img>
//                 <p>asjdhaksjdhkajshdkhaskjdhkashdkhaskdhasjkdkajsdjasdkj </p>
//                 <a href="https://google.com" target='_blank' rel="noreferrer">Learn more</a>
//             </div>
//         </div>
//         <div className='col-md-4 card-product'>
//             <div className='text-center   mt-5'>
//                 <img src={image3} alt='thumbnail'></img>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
//                 <a href="https://google.com" target='_blank' rel="noopener" rel="noreferrer">Learn more</a>
//             </div>

//         </div>

//         <div className='col-md-4 card-product'>

//             <div className='text-center  '>
//                 <img src={image4} alt='thumbnail'></img>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
//                 <a href="https://google.com" target='_blank' rel="noopener" rel="noreferrer">Learn more</a>
//             </div>
//         </div>

//         <div className='col-md-4 card-product'>

//             <div className='text-center  mt-5'>
//                 <img src={image5} alt='thumbnail'></img>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
//                 <a href="https://google.com" target='_blank' rel="noopener" rel="noreferrer">Learn more</a>
//             </div>
//         </div>


//     </div>

// )
// export default OurProduct;