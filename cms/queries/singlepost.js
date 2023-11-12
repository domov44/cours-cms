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
      ... on LeftRightRecord {
        id
        text {
          ... on ChipRecord {
            id
            chipLabel
          }
          ... on ExternalLinkRecord {
            id
            title
            url
          }
          ... on RichtextRecord {
            id
            richtext(markdown: true)
          }
        }
        mediaOnTheRight
        media {
          ... on MediablockRecord {
            id
            image {
              url
              alt
            }
          }
          ... on VideoblockRecord {
            id
            video {
              url
            }
          }
        }
      }
    }
    id
    titlePost
    category
  }
}
`