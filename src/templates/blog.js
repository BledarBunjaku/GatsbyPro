import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout';
import '../components/BlogStyle/BlogStyle.scss'
import ContactForm from '../components/HomePage/ContactForm'

export default ({ pageContext }) => {

    return <Layout>
        <div>
            <h1 className='text-center pt-4'>Blog</h1>

            <div className='row card-group'>

                {pageContext.post.map(post => {



                    return (
                        <div className='col-md-4 '>
                            <div className='card'>
                                <div>
                                    <img className='card-img-top img-fluid' src={post.node.featured_media.source_url} alt='thumbnail' /></div>
                                <div className='card-body' key={post.node.wordpress_id}>
                                    <h3 className='card-title' dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                    <small>
                                        {post.node.date}
                                    </small>
                                    <p dangerouslySetInnerHTML={{ __html: post.node.content }} />
                                    <div>
                                        <Link to={`/blog/${post.node.slug}`}>
                                            Read more
                    </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )

                })}

            </div>
            <div className='pagination'>
                {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
                    <div className='page-number-wrapper text-center' key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
                        <div className='anchor-style'>
                            <Link className='page-number active' to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                                {index + 1}
                            </Link>
                        </div>
                    </div>
                ))}
            </div></div>
        <ContactForm />
    </Layout>
}