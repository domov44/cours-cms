export default gql`
query Posts {
  allPosts {
    postDate
    postSlug
    titlePost
    author
    seo {
      seo {
        image {
          url
          alt
        }
      }
    }
    category
    postCategory {
      categoryLabel
      categorySlug
    }
  }
  _allPostsMeta {
    count
  }
}
`;