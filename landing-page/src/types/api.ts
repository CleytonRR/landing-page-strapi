export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  description: string
  image: {
    alternativeText: string
    url: string
  }
  button: {
    label: string
    url: string
  }
  title: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
}
