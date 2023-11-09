export default gql`
query singlepost($slug: String) {
  post(filter: {postSlug: {eq: $slug}}) {
    content {
      ... on MediablockRecord {
        id
        image {
          alt
          url
        }
      }
      ... on RichtextRecord {
        id
        richtext
      }
      ... on VideoblockRecord {
        id
        video {
          url
        }
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

    introduction {
      richtext(markdown: true)
    }
    postSlug
    titlePost
    id
    postDate
    author
  }
}
`