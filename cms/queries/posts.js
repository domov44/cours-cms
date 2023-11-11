export default gql`
query Posts {
 _allPostsMeta {
    count
  }
  allPosts {
    _firstPublishedAt
    content {
      ... on MediablockRecord {
        id
      }
      ... on RichtextRecord {
        id
      }
      ... on VideoblockRecord {
        id
      }
    }
    seo {
      seo {
        description
        image {
          url
          alt
        }
      }
    }
    id
    postSlug
    titlePost
    postDate
    author
  }
}
`;