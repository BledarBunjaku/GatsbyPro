import React from 'react';
import Layout from '../components/Layout/Layout';
import HomePageContent from '../components/HomePage/HomePageContent'
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import Portfolio from '../components/Portfolio/Portfolio'
import Product from '../components/Products/Products'
import Career from '../components/Careers/Career'





export default ({ pageContext }) => {
    return (

        <Layout>
            { pageContext.title === "Home" ? <HomePageContent /> : (null)}
            { pageContext.title === "About" ? <AboutUsContent /> : (null)}
            { pageContext.title === "Portfolio" ? <Portfolio /> : (null)}
            { pageContext.title === "Product" ? <Product /> : (null)}
            { pageContext.title === "Career" ? <Career /> : (null)}
            { pageContext.title === "Blog" ? <h6>faqja Blog</h6> : (null)}

        </Layout>

    )

};