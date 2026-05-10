import React from 'react'
import Header from '../components/Header'
import ContactBlock from '../components/ContactBlock'
import styled from 'styled-components'
import emailImg from '../assets/email.png'
import githubImg from '../assets/github.webp'

const Contact = () => {
	const contacts = [
		{
      image: emailImg,
      alt: 'Email',
      link: 'mailto:jwon04lee@gmail.com',
      text: 'jwon04lee@gmail.com',
    },
    {
      image: githubImg,
      alt: 'Github',
      link: 'https://github.com/jwon04lee',
      text: 'github.com/jwon04lee',
    },
	]

  return (
    <Section id="contact">
			<Header title="CONTACT" />
			<Main>
				{contacts.map((item, idx) => (
					<ContactBlock key={idx} {...item} />
				))}
			</Main>
		</Section>
  )
}

export default Contact

const Section = styled.section`
	min-height: 100vh;
  background-color: #2c2c2c;
  color: #F5F0EB;
  padding: 0 40px;
`

const Main = styled.main`
	height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`