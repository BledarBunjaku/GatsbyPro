import React from 'react'
import Management from './Management'
import AllTogether from './AllTogether'
import Designer from './Designer'
import Developer from './Developer'
import { Tabs, Tab } from 'react-bootstrap'
import './CareerStyle/Career.scss'
import OurGallery from '../AboutUs/OurGallery'
import { StaticQuery, graphql } from 'gatsby'


const career = function () {
    const careerName = <StaticQuery query={graphql`
    {
        allWordpressPage(filter: { title: { eq: "Home" } }) {
            nodes {
                acf {
                    career_title
                }
            }
        }
    }    
    `} render={props => (props.allWordpressPage.nodes[0].acf.career_title)} />

    return (
        <div className='career'>
            <OurGallery />
            <div className='pt-5'>
                <h3 className='font-weight-bold text-center py-5'>{careerName}</h3>
            </div>
            <Tabs defaultActiveKey='home' id="uncontrolled-tab-example">
                <Tab eventKey="home" title="AllTogether" >
                    <AllTogether />
                </Tab>
                <Tab eventKey="profile" title="Designer" >
                    <Designer />
                </Tab>
                <Tab eventKey="contact" title="Developer" >
                    <Developer />
                </Tab>
                <Tab eventKey="management" title="Management"  >
                    <Management />
                </Tab>
            </Tabs>
        </div>
    )
}

export default career 