import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Style/OurSpeciality.scss'
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

export default class OurSpeciality extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      speed: 400,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true

          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <div className='col-md-12' >



        <StaticQuery query={graphql
          `
        {
  allWordpressAcfPosts {
    nodes {
      acf {
        card1_content
        card1_title
        card2_content
        card2_title
        card3_content
        card3_title
        card4_content
        card4_title
        card1_image {
          url
        }
        card4_image {
          url
        }
        card2_image {
          localFile {
            childImageSharp {
              fixed (width: 400 ){
                          ...GatsbyImageSharpFixed
              }
            }
          }
        }
        card3_image {
          localFile {
            childImageSharp {
              fixed (width: 400 ){
                          ...GatsbyImageSharpFixed
               }
            }
          }
        }
      }
    }
  }
}
          
        
        `} render={props => (
            props.allWordpressAcfPosts.nodes.map(item =>
              <Slider className='our-speciality'  {...settings}>



                <div className='card  text-center my-1 ml-2'>
                  <img className='card-image' src={item.acf.card1_image.url} alt='thumbnail'></img>
                  <h3 className='font-weight-bold'>{item.acf.card1_title}</h3>
                  <p>{item.acf.card1_content}</p>
                </div>

                <div className='card  text-center my-1 ml-2' >
                  <img className='card-image' src={item.acf.card4_image.url} alt='thumbnail' />
                  <h3 className='font-weight-bold'>{item.acf.card4_title}</h3>
                  <p>{item.acf.card4_content}</p>
                </div>

                <div className='card text-center my-1 ml-2' >
                  <Img className='card-image' fixed={item.acf.card2_image.localFile.childImageSharp.fixed} alt='thumbnail'></Img>
                  <h3 className='font-weight-bold'>{item.acf.card2_title}</h3>
                  <p>{item.acf.card2_content}</p>
                </div>

                <div className='card  text-center my-1 ml-2' >
                  <Img className='card-image' fixed={item.acf.card3_image.localFile.childImageSharp.fixed} alt='thumbnail'></Img>
                  <h3 className='font-weight-bold'>{item.acf.card3_title}</h3>
                  <p>{item.acf.card3_content}</p>
                </div>



              </Slider>
            ))} />
      </div >
    );
  }
}



{/* <StaticQuery query={graphql 
        `
        {
          allWordpressWpCardpost {
            nodes {
              excerpt
              content
              featured_media {
                source_url
              }
            }
          }
        }          
        
        `}  render={props => (   <Slider {...settings}>      {    props.allWordpressWpCardpost.nodes.map( item => 

        <div className='col-md-4'><div className='text-center textStyle'>
           <img src={item.featured_media.source_url} ></img> 

           <h3  dangerouslySetInnerHTML= {{__html: item.content}}></h3>
           
           <p dangerouslySetInnerHTML= {{__html: item.excerpt}}></p>      </div> </div>
            
            ) } </Slider>  ) } /> */}