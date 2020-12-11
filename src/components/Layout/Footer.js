import React from 'react';
import './Style/Footer.scss';
import { StaticQuery, graphql, Link } from 'gatsby';
import icon from '../../images/Logo.jpg'
import { faFacebook, faSkype, faLinkedin, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMap } from '@fortawesome/free-regular-svg-icons';
import image from '../../images/footerimg.png'
import image1 from '../../images/footerimg1.png'
// import '../HomePage/Style/queries.scss'


const Footer = () => (

  <div>
    <div className="footer-logo w-100 h-50 bg-transparent pt-0 text-center ">
      <p><span><img src={icon} alt='thumbnail'></img></span></p>
    </div>

    <div className="row footer-style">

      <div className="col-md-3 ">
        <h4 className='font-weight-bold mb-4'>Contact Us</h4>
        <ul>
          <li > <p ><span className='mr-2'><FontAwesomeIcon icon={faViber} /></span>+(290) 520-7927</p> </li>
          <li > <p ><span className='mr-2'><FontAwesomeIcon icon={faMap} /></span>Dhaka,Bangladesh</p> </li>
          <li > <p ><span className='mr-2'><FontAwesomeIcon icon={faEnvelopeOpen} /></span>themefisher.com</p> </li>
        </ul>
      </div>
      <div className="col-md-3 ">

        <h4 className='font-weight-bold mb-4'>Our Company</h4>

        <StaticQuery query={graphql
          `
                {
                    allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "footer-menu"}}) {
                      nodes {
                        items {
                          object_slug
                          title
                        }
                      }
                    }
                  }
                  `
        } render={props => (<ul>{props.allWordpressWpApiMenusMenusItems.nodes[0].items.map(item => (

          <li className="nav-item" ><Link to={`/${item.object_slug}`} key={item.title}><span>{item.title}</span>
          </Link></li>

        ))}
        </ul>)} />

      </div>
      <div className="col-md-3">

        <h4 className='font-weight-bold '>Social Contacts</h4>
        <ul >
          <li className="nav-item"><a href="https://www.facebook.com/" target="_blank" rel="noopener" rel='noreferrer' alt="facebook website">Facebook</a></li>
          <li className="nav-item"><a href="https://www.linkedin.com/" target="_blank" rel="noopener" rel='noreferrer' alt="linked in website">Linked in</a></li>
          <li className="nav-item"><a href="https://www.youtube.com/" target="_blank" rel="noopener" rel='noreferrer' alt="youtube website">Youtube</a></li>
          <li className="nav-item"><a href="https://www.vimeo.com/" target="_blank" rel="noopener" rel='noreferrer' alt="videom website">Vimeo</a></li>
          <li className="nav-item"><a href="https://www.skype.com/" target="_blank" rel="noopener" rel='noreferrer' alt="skype website">Skype</a></li>
        </ul>

      </div>
      <div className="col-md-3 nav w-100">


        <h4 className="font-weight-bold mb-0 w-100">Adress</h4>
        <div>
          <ul className='nav'>
            <li className='nav-item w-75'><p className='w-100 m-0'> Internet Systems Consortium, Inc.</p></li>
          </ul>


          <h4 className='font-weight-bold mb-1'>Follow Us</h4>
          <ul className=" p-0 m-0 w-100 nav follow-us">
            <li className="nav-item "> <a href='http://www.facebook.com' target='_blank' rel="noopener" rel='noreferrer' className="nav-link ml-0"><span className='social-icons text-primary'><FontAwesomeIcon icon={faFacebook} size="2x" /></span></a></li>
            <li className="nav-item "> <a href='http://www.skype.com' target='_blank' rel="noopener" rel='noreferrer' className="nav-link ml-0"><span className='social-icons text-success'><FontAwesomeIcon icon={faSkype} size="2x" /></span></a></li>
            <li className="nav-item "> <a href='http://www.linkedin.com' target='_blank' rel="noopener" rel='noreferrer' className="nav-link ml-0"><span className='social-icons text-danger'><FontAwesomeIcon icon={faLinkedin} size="2x" /></span> </a></li>
            <li className="nav-item "> <a href='http://www.instagram.com' target='_blank' rel="noopener" rel='noreferrer' className="nav-link ml-0"><span className='social-icons text-warning'><FontAwesomeIcon icon={faInstagram} size="2x" /></span> </a></li>
          </ul>
        </div>

      </div>
      <div className='col-md-12 footer-image'>
        <div className='row'>
          <div className='col-md-4'><img src={image1} alt='thumbnail'></img></div>
          <div className='col-md-4'><p className='pt-5 font-weight-light'>copyright@themefisher2020</p></div>
          <div className='col-md-4'><img src={image} alt='thumbnail'></img></div>
        </div>

      </div>
    </div>

  </div >
)
export default Footer;



