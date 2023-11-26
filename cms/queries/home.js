export default gql`
query Home {
    home {
      content {
        ... on LeftRightRecord {
                id
                mediaOnTheRight
          text {
            ... on ChipRecord {
                        id
                        chipLabel
                    }
            ... on ExternalLinkRecord {
                        id
                        title
                        url
                    }
            ... on RichtextRecord {
                        id
                        richtext(markdown: true)
                    }
                }
          media {
            ... on VideoblockRecord {
                        id
              video {
                            url
                        }
                    }
            ... on MediablockRecord {
                        id
              image {
                            url
                            alt
                video {
                                mp4Url
                            }
                        }
                    }
                }
            }
        ... on MediablockRecord {
                id
          image {
                    url
                    alt
            video {
                        mp4Url
                    }
                }
            }
        ... on VerticalContentRecord {
                id
          text {
            ... on ChipRecord {
                        id
                        chipLabel
                    }
            ... on ExternalLinkRecord {
                        id
                        title
                        url
                    }
            ... on RichtextRecord {
                        id
                        richtext(markdown: true)
                    }
                }
            }
        ... on VideoblockRecord {
                id
          video {
                    url
                }
            }
        }
        id
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
    }
}
`