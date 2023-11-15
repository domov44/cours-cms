export default gql`
query Posts {
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
  allPosts {
    postDate
    postSlug
    titlePost
    author
    seo {
      seo {
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