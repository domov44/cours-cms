export default gql`
query categories($slug: String) {
    category(filter: {categorySlug: {eq: $slug}}) {
    categoryLabel
    categorySlug
    categoryDescription {
      richtext(markdown: true)
    }
    seo {
      seo {
        description
        title
        image {
          url
          alt
        }
      }
    }
  }
  allCategories {
    categoryLabel
    categorySlug
    id
    categoryDescription {
      richtext(markdown: true)
    }
    seo {
      seo {
        description
        title
        image {
          url
          alt
        }
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