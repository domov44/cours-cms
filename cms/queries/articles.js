export default gql`
query Articles {
    allArticles {
      id
      title
      _status
      _publishedAt
      _updatedAt
      postDate
      content
      excerp
      author
      seoMetaData {
        image {
          url
          alt
        }
      }
    }
    _allArticlesMeta {
      count
    }
    article {
      blogSlug
      content
      introduction
      title
      seoMetaData {
        image {
          alt
          url
        }
      }
      author
    }
}
`;