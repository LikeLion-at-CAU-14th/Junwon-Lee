import React from 'react'
import styled from 'styled-components'

const ProfileCard = ({ image, name, items }) => {
  return (
    <CardContainer>
			<Face>
				<img src={image} alt="face" />
			</Face>
			<Explain>
				<h2>{name}</h2>
				<ul>
						{items.map((item, idx) => (
								<li key={idx}>{item}</li>
						))}
				</ul>
			</Explain>
    </CardContainer>
  )
}

export default ProfileCard

const CardContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

const Face = styled.div`
	img {
		width: 250px;
		border-radius: 50%;
	}
`

const Explain = styled.div`
	width: 40vw;
	font-size: 24px;
	
	li {
		margin-bottom: 12px;
	}
`