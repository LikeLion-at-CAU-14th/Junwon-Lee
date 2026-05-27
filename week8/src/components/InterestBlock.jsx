import React from 'react'
import styled from 'styled-components'

const InterestBlock = ({ image, alt, title, descriptions }) => {
  return (
    <Block>
			<ImageBox>
				<img src={image} alt={alt} />
			</ImageBox>
			<h3>{title}</h3>
			{descriptions.map((desc, idx) => (
				<p key={idx}>{desc}</p>
			))}
    </Block>
  )
}

export default InterestBlock

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