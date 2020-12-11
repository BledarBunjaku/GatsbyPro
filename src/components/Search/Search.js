// // this component queries for all of the content for the entire site
// // and provides it to the child component which will handle the view layer - (searching, filtering, and rendering)
// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

// // import SearchResults from '/SearchResults'

// export default function SearchPage() {

//     // this endpoint is available to us because of the PHP plugin we added earlier, and the changes we made to gatsby-config.js
//     // it should return all text content saved in Wordpress, across Post and Page types, and includes ACF text.
//     // you could test this query by pasting it into Gatsby's GraphiQL page:
//     // http://localhost:8000/___graphql
//     const data = useStaticQuery(graphql`{
//     allWordpressWpSearchResults {
//       edges {
//         node {
//           id
//           pathname # the full pathname, so you can link to it in the view, eg https://localhost:8000/a-post-about-bagels
//           post_title # the title of the page/post
//           post_type # will return "post" or "page", so you can treat them differently if you need to
//           searchData # will include all the rich text content, including ACF text
//         }
//       }
//     }
//   }`)


//     return (
//         <SearchResults data={data} />
//     )
// }