import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';

export default ({ pageContext }) => {

    return <Layout>

        {pageContext.title}

    </Layout>
}