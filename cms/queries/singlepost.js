export default gql`
query singlepost($slug: String) {
  post(filter: {postSlug: {eq: $slug}}) {
    introduction {
      richtext(markdown: true)
    }
    postDate
    postSlug
    seo {
      seo {
        image {
          url
          alt
        }
      }
    }
    author
    content {
      ... on LeftRightRecord {
        id
        text {
          richtext(markdown: true)
        }
        mediaOnTheRight
        media {
          ... on MediablockRecord {
            id
            image {
              alt
              url
              video {
                mp4Url
              }
            }
          }
        }
      }
      ... on MediablockRecord {
        id
        image {
          alt
          url
        }
      }
      ... on RichtextRecord {
        id
        richtext(markdown: true)
      }
      ... on VideoblockRecord {
        id
        video {
          url
        }
      }
    }
    id
    titlePost
  }
}
`