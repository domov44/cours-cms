export default gql`
query Blog {
  blog {
    content {
      ... on LeftRightRecord {
        id
        mediaOnTheRight
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
        media {
          ... on VideoblockRecord {
            id
            video {
              url
            }
          }
          ... on MediablockRecord {
            id
            image {
              url
              alt
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
          url
          alt
          video {
            mp4Url
          }
        }
      }
      ... on VerticalContentRecord {
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
      }
      ... on VideoblockRecord {
        id
        video {
          url
        }
      }
      ... on GridCardRecord {
        id
        addAllCategories
        card {
          cardPicture {
            alt
            url
          }
          cardSubtitle
          cardTitle
          cardLink
          id
        }
        sectionTitle {
          id
        richtext(markdown: true)
        }
      }
      ... on GridForVerticalCardRecord {
        id
        addAllCategoriesFilter
        addAllPosts
        cardsNumber
        gridTitle {
          richtext(markdown: true)
        }
        verticalCard {
          cardSubtitle
          cardTitle
          id
          cardButton {
            title
            url
          }
          cardImage {
            url
            alt
          }
          cardSecondaryLink {
            url
            title
          }
        }
      }
    }
    id
    seo {
      seo {
        description
        title
        image {
          alt
          url
        }
      }
    }
  }
}
`