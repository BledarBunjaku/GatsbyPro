import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout';

export default ({ pageContext }) => {

    return <Layout>

        <div className='row card-group'>

            {pageContext.post.map(post => {



                return (
                    <div className='col-md-4 card'>
                        <div key={post.node.wordpress_id}>
                            <h3 className='card-title' dangerouslySetInnerHTML={{ __html: post.node.title }} />
                            <small>
                                {post.node.date}
                            </small>
                            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                            <div>
                                <Link to={`/wordpress-gatsby/blog/${post.node.slug}`}>
                                    Read more
                    </Link>
                            </div>
                        </div>
                    </div>
                )

            })}

        </div>
        <div>
            {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
                <div key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
                    <Link to={index === 0 ? '/wordpress-gatsby/blog' : `/wordpress-gatsby/blog/${index + 1}`}>
                        {index + 1}
                    </Link>
                </div>
            ))}
        </div></Layout>
}