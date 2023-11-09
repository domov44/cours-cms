export default gql `
query Header{
    header {
    menu {
      ... on ExternalLinkRecord {
        id
        title
        url
      }
    }
    logo {
      url
      alt
    }
    id
  }
}
  `