export default gql`
query Articles {
    allArticles {
      id
      title
      _status
      _firstPublishedAt
      content
    }
    _allArticlesMeta {
      count
    }
}
`;