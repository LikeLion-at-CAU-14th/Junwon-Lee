import React from 'react'
import Header from '../components/Header'
import InterestBlock from '../components/InterestBlock'
import styled from 'styled-components'
import dontoliver from '../assets/dontoliver.jpg'
import fcbarcelona from '../assets/fcbarcelona.jpg'
import darthvader from '../assets/darthvader.JPG'
import verstappen from '../assets/verstappen.jpg'

const Interest = () => {
	const interests = [
		{
      image: dontoliver,
      alt: 'Hardstone Psycho - Don Toliver',
      title: '음악 🎧',
      descriptions: ['일상생활 필수품', '주로 외힙이나 R&B', '추천 아티스트: Don Toliver'],
    },
    {
      image: fcbarcelona,
      alt: 'FC Barcelona logo',
      title: '축구 ⚽️',
      descriptions: ['축구에 진심', 'FC 바르셀로나 훌리건', '해축 새벽 중계 시청이 취미'],
    },
    {
      image: darthvader,
      alt: 'Darth Vader',
      title: '영화 🍿',
      descriptions: ['혼영러', '고전 명작, 특히 SF 극호', '사진은 최근에 찾은 다스베이더 짤'],
    },
    {
      image: verstappen,
      alt: 'Sid Verstappen',
      title: '차 🚗',
      descriptions: ['본투비 차덕', '2020년부터 F1 팔로우', '슈퍼 막스'],
    },
	]
  return (
    <Section id="interest">
			<Header title="INTEREST" />
			<Main>
				{interests.map((item, idx) => (
					<InterestBlock key={idx} {...item} />
				))}
			</Main>
			<Footer>
				<p>이외에도 게임, 애니 등 흥미로운 주제들은 다 좋아합니다!</p>
			</Footer>
		</Section>
  )
}

export default Interest

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

const Footer = styled.footer`
	color: #F5F0EB;
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;
`