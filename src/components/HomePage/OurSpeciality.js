import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Style/OurSpeciality.scss'
import { StaticQuery, graphql } from 'gatsby';
// import '../HomePage/Style/queries.scss'
export default class OurSpeciality extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
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
            dots: false

          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <div className='speciality-wrapper'>
        <StaticQuery query={graphql`
            {
  allWordpressPage(filter: {title: {eq: "Home"}}) {
    nodes {
      acf {
        speciality_title
        single_speciality {
          card_content
          card_title
          card_image {
            url
          }
        }
        speciality_title1
      }
    }
  }
}

` } render={props => (<div> <div><h2 className='font-weight-bold'>{props.allWordpressPage.nodes[0].acf.speciality_title}</h2>
            <p>{props.allWordpressPage.nodes[0].acf.speciality_title1}</p>

          </div><Slider className='our-speciality'{...settings}>{props.allWordpressPage.nodes[0].acf.single_speciality.map(item =>
            <div className='card border-0'>
              <img src={item.card_image.url} className="mx-auto img-fluid" alt='img-thumbnail' />
              <div className='card-bady'>
                <h5 className='text-center py-1'>{item.card_title}</h5>
                <p className='text-center'>{item.card_content}</p>
              </div>
            </div>
          )
          }
            </Slider>
          </div>

          )
          }
        />
      </div>
    )
  }
}





