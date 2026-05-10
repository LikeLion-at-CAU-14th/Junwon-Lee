import React from 'react'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard'
import styled from 'styled-components'
import faceImg from '../assets/face.JPG'

const About = () => {
	const profileItems = [
		'중앙대학교 소프트웨어학부 24학번',
		'멋쟁이사자처럼 14기 프론트엔드 아기사자',
		'2004년 1월 15일',
		'INTP',
		'자칭 취미부자, 타칭 ㅆ덕',
	]

  return (
    <Section id="about">
			<Header title="ABOUT" />
			<Main>
				<ProfileCard
					image={faceImg}
					name="이준원"
					items={profileItems}
				/>
			</Main>
		</Section>
  )
}

export default About

const Section = styled.section`
	min-height: 100vh;
  background-color: #2c2c2c;
  color: #F5F0EB;
  padding: 0 40px;
`

const Main = styled.main`
  height: 70vh;
  display: flex;
  align-items: center;
`