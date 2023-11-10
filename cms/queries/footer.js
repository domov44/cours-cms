export default gql`
query Footer {
  footer {
    signature {
      richtext(markdown: true)
    }
    social {
      title
      url
    }
  }
}
  `