import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        url
        alternativeText
      }
    }
  }
`

export default GET_LANDING_PAGE
