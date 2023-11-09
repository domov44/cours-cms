export default gql`
query Footer{
    footer {
    logo {
      fichierLogo {
        alt
        url
      }
    }
    social {
      url
      title
    }
    signature
    navigation {
      url
      title
    }
  }
}
  `