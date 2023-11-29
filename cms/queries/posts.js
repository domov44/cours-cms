export default gql`
query Posts {
  allCategories {
    categoryLabel
    categorySlug
    id
    categoryDescription {
      richtext(markdown: true)
    }
    seo {
      seo {
        image {
          url
          alt
        }
        description
        title
      }
    }
  }
  allPosts {
    postDate
    postSlug
    titlePost
    author
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
    postCategory {
      categoryLabel
      categorySlug
    }
  }
}
`;