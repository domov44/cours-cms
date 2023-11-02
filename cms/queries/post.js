export default gql`
query Post {
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
`