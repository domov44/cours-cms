export default gql`
query Articles {
    allArticles {
      id
      blogSlug
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
}
`;