import React from "react"
import { Navbar, Nav, Form } from "react-bootstrap"
import { StaticQuery, graphql, Link } from 'gatsby';
import './Style/Navigation.scss'
import icon from '../../images/Logo.jpg'
import Search from '../../components/Search/Search'





const Navigation = () => (


  <Navbar bg="transparent" expand="lg" className="container">
    <Navbar.Brand><span><a href='http://https://main.dcs679qalokhc.amplifyapp.com/home'><img src={icon} alt='thumbnail' /></a></span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">


      <StaticQuery query={graphql
        `
    {
      allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Primary Header Navigation"}}) {
        edges {
          node {
            items {
              title
              object_slug
            }
          }
        }
      }
    }          
        `} render={props => (<Nav className="mr-auto navigation-bar pt-1" >
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <div className='navigation-page'>

              <div className='active' >
                <Link to={`/${item.object_slug}`} key={item.title} activeClassName='active' >{item.title}
                </Link>
              </div>
              <div class=" text-center menus active" >
              </div>
            </div>

          ))}
        </Nav>)} />

      <Form inline className="mr-auto contact-us">


        <input className="  mr-sm-2  btn-sm" type="text" placeholder="Search" ></input>
        <button className='  btn-sm' ><a href='https//:www.google.com' target='_blank'>Contact us</a></button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation;

