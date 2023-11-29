export default gql`
query singlepost($slug: String) {
  allCategories {
    categoryLabel
    categorySlug
    id
    categoryDescription {
      richtext(markdown: true)
    }
    seoCategory {
      image {
        url
        alt
      }
    }
  }
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
    }
    id
    titlePost
    postCategory {
      categoryLabel
      categorySlug
    }
  }
}
`