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
}
`;