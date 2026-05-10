import React from 'react'
import styled from 'styled-components'

const ContactBlock = ({ image, alt, link, text }) => {
  return (
    <Block>
			<ImageBox>
				<img src={image} alt={alt} />
			</ImageBox>
			<ContactLink href={link}>{text}</ContactLink>
    </Block>
  )
}

export default ContactBlock

const Block = styled.div`
	width: 15vw;
	text-align: center;
`

const ImageBox = styled.div`
	img {
    width: 200px;
    border-radius: 50%;
  }
`

const ContactLink = styled.a`
	font-size: 24px;
  color: #F5F0EB;
  margin-top: 48px;
  display: block;
`