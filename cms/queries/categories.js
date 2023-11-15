export default gql`
query categories($slug: String) {
    category(filter: {categorySlug: {eq: $slug}}) {
    categoryLabel
    categorySlug
    categoryDescription {
      richtext(markdown: true)
    }
    seoCategory {
      image {
        alt
        url
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