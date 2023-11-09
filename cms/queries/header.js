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
    logoDuSiteWeb {
      fichierLogo {
        url
        alt
      }
    }
    id
  }
}
  `