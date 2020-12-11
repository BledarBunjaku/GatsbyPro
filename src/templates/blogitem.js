import React from 'react'
import Layout from '../components/Layout/Layout';

export default ({ pageContext }) => {

    return <Layout>

        {pageContext.title}

    </Layout>
}