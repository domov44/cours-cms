export default gql`
query Posts {
  allPosts {
    postDate
    postSlug
    titlePost
    category
    author
    seo {
      seo {
        image {
          url
          alt
        }
      }
    }
  }
  _allPostsMeta {
    count
  }
}
`;