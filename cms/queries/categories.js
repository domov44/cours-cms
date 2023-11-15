export default gql`
query categories($slug: String) {
    category(filter: {categorySlug: {eq: $slug}}) {
    categoryLabel
    categorySlug
  }
  allPosts {
    postDate
    postSlug
    titlePost
    seo {
      seo {
        image {
          alt
          url
        }
      }
    }
  }
}
`