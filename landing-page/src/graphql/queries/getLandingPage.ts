import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment header on LandingPage {
    header {
      description
      image {
        alternativeText
        url
      }
      button {
        label
        url
      }
      title
    }
  }

  fragment aboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallments
      benefits
      button {
        label
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
    }
  }
`

export default GET_LANDING_PAGE
