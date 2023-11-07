export default gql`
query singlepost($slug: String) {
  article(filter: {blogSlug: {eq: $slug}}) {
    id
      blogSlug
      _publishedAt
      content
      introduction
      title
      seoMetaData {
        image {
          alt
          url
        }
      }
      author
    }
}
`