
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticQuery, graphql, } from 'gatsby'
import './Style/OurClient.scss'
import image from '../../images/quote-left.png'
import image1 from '../../images/quote-right.png'
import image3 from '../../images/left-clients.png'
import image4 from '../../images/right-clients.png'
// import '../HomePage/Style/queries.scss'

export default class OurClients extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='col-md-12 mb-5'>
        <h2 className='text-center my-5'> What Our <strong>Client Says?</strong></h2>




        <div className='our-client d-flex row justify-content-center'>
          <div className='clients-img mb-5' ><img src={image3} alt='thumbnail' ></img></div>

          <div className='card-quotes align-self-center bg-transparent' ><img className='mt-5' src={image} alt='thumbnail'></img></div>

          <StaticQuery query={graphql

            `{
  allWordpressAcfPages(filter: {id: {eq: "aad357fd-d57b-50cc-9b0e-5297bd0686b6"}}) {
    nodes {
      acf {
        clientcard1_client_job
        clientcard1_client_name
        clientcard1_content
        clientcard1__image {
          url
        }
        clientcard2_client_job
        clientcard2_client_name
        clientcard2_content
        clientcard2_image {
          url
        }
      }
    }
  }
}`

          } render={props => (props.allWordpressAcfPages.nodes.map(item =>

            <Slider className='text-center card ' {...settings}>

              <div  >
                <img className='m-auto client-image' src={item.acf.clientcard1__image.url} alt='thumbnail' ></img>

                <p > {item.acf.clientcard1_content} </p>
                <p className='font-weight-bold'> {item.acf.clientcard1_client_name} </p>
                <p> {item.acf.clientcard1_client_job} </p>
              </div>
              <div >
                <img className='m-auto client-image' src={item.acf.clientcard2_image.url} alt='thumbnail' ></img>

                <p > {item.acf.clientcard2_content} </p>
                <p className='font-weight-bold'> {item.acf.clientcard2_client_name}  </p>
                <p> {item.acf.clientcard2_client_job} </p>
              </div>
            </Slider>

          ))}
          />
          <div className='card-quotes align-self-center bg-transparent' ><img className='mt-5' src={image1} alt='thumbnail'></img></div>
          <div className='clients-img mb-5' ><img src={image4} alt='thumbnail' ></img></div>

        </div>
      </div>
    );
  }
}
