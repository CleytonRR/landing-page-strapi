import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'
import { SectionReviewProps } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = ({ title, reviews }: SectionReviewProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ name, photo, text }, index) => (
          <ReviewCard key={index} name={name} photo={photo} text={text} />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
