import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const socialLinks = [
  {
    title: 'twitter',
    url: 'http://twitter.com'
  },
  {
    title: 'github',
    url: 'http://github.com'
  },
  {
    title: 'dribbble',
    url: 'http://dribbble.com'
  }
]

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          photo={profile.photo}
          socialLinks={socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
