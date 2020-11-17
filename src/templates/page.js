import React from 'react';
import Layout from '../components/Layout/Layout';
import HomePageContent from '../components/HomePage/HomePageContent'
import AboutUsContent from '../components/AboutUs/AboutUsContent'

import Portfolio from '../components/Portfolio/Portfolio'





export default ({ pageContext }) => {
    return (

        <Layout>


            { pageContext.title === "Home" ? <HomePageContent /> : (null)}
            { pageContext.title === "About" ? <AboutUsContent /> : (null)}
            { pageContext.title === "Portfolio" ? <Portfolio /> : (null)}
            { pageContext.title === "Product" ? <p>Product</p> : (null)}
            { pageContext.title === "Career" ? <h5>faqja Career</h5> : (null)}
            { pageContext.title === "Blog" ? <h6>faqja Blog</h6> : (null)}


        </Layout>






    )

};